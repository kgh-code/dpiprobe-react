import React, { useMemo } from "react";
import 'bulma/css/bulma.css'
import { useTable, useFilters, useGlobalFilter } from "react-table";



// const columns = [{
//   header: 'Age',
//   footer: 'Total: ' + ageSum
// }]

const DefaultColumnFilter = ({column: { filterValue, preFilteredRows, setFilter }}) => {
  const count = preFilteredRows.length;
  return (
    <input
      value={filterValue || ""}
      onChange={e => {
        setFilter(e.target.value || undefined);
      }}
      placeholder={`Search ${count} records...`}
      className="input"
    />
  );
};

const GlobalFilter = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter
}) => {
  const count = preGlobalFilteredRows && preGlobalFilteredRows.length;

  return (
    <span>
      Search:{" "}
      <input
        value={globalFilter || ""}
        onChange={e => {
          setGlobalFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
        }}
        placeholder={`${count} records...`}
        style={{
          border: "0"
        }}
      />
    </span>
  );
};

function Table({ data }) {

  // let ageSum = 0
  // for (let i = 0; i <= data.length; i++) {
  //   ageSum += data[i].dpi
  // }
  // ageSum = ageSum / data.length;

  const columns = useMemo(
    () => [
      {
        Header: "DPI's For Query  : ",

        columns: [
          {
            Header: "Client",
            accessor: "clientID",
            sortType: "basic"
          },
          {
            Header: "Office",
            accessor: "officeID",
            sortType: "basic"
          },
          {
            Header: "Device",
            accessor: "deviceID",
            sortType: "basic"
          },
          {
            Header: "DPI",
            accessor: "dpi",
            sortType: "basic"
          }
        ]
      }
    ],
    []
  );

  const filterTypes = React.useMemo(
    () => ({
      text: (rows, id, filterValue) => {
        return rows.filter(row => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      }
    }),
    []
  );

  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter
    }),
    []
  );


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      filterTypes
    },
    useFilters,
    useGlobalFilter
  );

  return (
    <table {...getTableProps()} className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} className="has-text-link">
                {column.render("Header")}
                <div>{column.canFilter ? column.render("Filter") : null}</div>
              </th>
            ))}
          </tr>
        ))}
        <tr>
          <th colSpan={visibleColumns.length} style={{textAlign: "left"}}>
            <GlobalFilter
              preGlobalFilteredRows={preGlobalFilteredRows}
              globalFilter={state.globalFilter}
              setGlobalFilter={setGlobalFilter}
            />
          </th>
        </tr>
        <tr>
        <th>
        </th>
        </tr>

      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} >
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
