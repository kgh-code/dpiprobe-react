import React, { Component } from 'react';
import axios from "axios";
import 'bulma/css/bulma.css'

import PlusButton from './components/PlusButton';
import RunQueryButton from './components/RunQueryButton';
import Counter from './components/Counter';
import Table from "./components/Table";
import SelectClientID from "./components/SelectClientID";
import OfficeInput from "./components/OfficeInput";
import DeviceInput from "./components/DeviceInput";
import SelectQueryType from "./components/SelectQueryType";
import SelectQueryValOne from "./components/SelectQueryValOne";
import SelectQueryValTwo from "./components/SelectQueryValTwo";
import DpiCard from "./components/DpiCard";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {querycount: 0, mode:'select', deviceId:'', clientId:'', officeId:'', queryType:'', val1:'', val2:''};

  }

  runQueryEvent = (event) => {
      let querycount = this.state.querycount;
      querycount += 1;
      this.setState({ querycount: querycount });
      (async () => {

        let urls = "http://localhost:8080/dpitreated/";
        if (this.state.deviceId.length > 0) {
          urls = urls.concat("device/"+this.state.deviceId);
        } else {
          if (this.state.clientId.length > 0) {
            urls = urls.concat("clients/"+this.state.clientId);
            if (this.state.officeId.length > 0) {
              urls = urls.concat("/"+this.state.officeId);
            }
            if (this.state.queryType.length > 0) {
              urls = urls.concat("?filter="+this.state.queryType);
              if (this.state.val1.length > 0) {
                urls = urls.concat("&val1="+this.state.val1);
              }
              if (this.state.val2.length > 0) {
                urls = urls.concat("&val2="+this.state.val2);
              }
            }

//            http://localhost:8080/dpitreated/clients/9/690?filter=BETWEEN&val1=0&val2=10

          } else {
            urls = urls.concat("clients/9");
          }
        }
        console.log(urls);

        let result = await axios(urls);
        this.setState({ querycount: querycount, data: result.data, mode: 'view' });
      })();
  }

  selectClientID = (e) => {
      this.setState({ clientId: e.target.value });
  }
  selectDeviceID = (e) => {
      this.setState({ deviceId: e.target.value });
  }
  selectOfficeID = (e) => {
      this.setState({ officeId: e.target.value });
  }
  selectQueryType = (e) => {
      this.setState({ queryType: e.target.value });
  }
  selectVal1 = (e) => {
      this.setState({ val1: e.target.value });
  }
  selectVal2 = (e) => {
      this.setState({ val2: e.target.value });
  }


  render() {
        if(this.state.mode === 'view') {
          if(this.state.deviceId.length > 0) {
            return (
              <DpiCard data={this.state.data} />
            );
          } else {
            return (
              <div className="App">
                  <div className="notification">
                  <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                    <tr>
                    <td><DeviceInput value = {this.state.deviceId} changed = {this.selectDeviceID}/></td>
                    <td><SelectClientID value = {this.state.clientId} changed = {this.selectClientID}/></td>
                    <td><OfficeInput value = {this.state.officeId} changed = {this.selectOfficeID}/></td>
                    <td><SelectQueryType value = {this.state.queryType} changed = {this.selectQueryType}/></td>
                    <td><SelectQueryValOne value = {this.state.val1} changed = {this.selectVal1}/></td>
                    <td><SelectQueryValTwo value = {this.state.val2} changed = {this.selectVal2}/></td>
                    <td><RunQueryButton count = {this.state.querycount} clicked = {this.runQueryEvent}/></td>
                    </tr>
                  </table>
                  <Table data={this.state.data} />
                  </div>
              </div>
            );
          }
        } else {
          return (
            <div className="App">
                <div className="notification">
                <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                  <tr>
                  <td><DeviceInput value = {this.state.deviceId} changed = {this.selectDeviceID}/></td>
                  <td><SelectClientID value = {this.state.clientId} changed = {this.selectClientID}/></td>
                  <td><OfficeInput value = {this.state.officeId} changed = {this.selectOfficeID}/></td>
                  <td><SelectQueryType value = {this.state.queryType} changed = {this.selectQueryType}/></td>
                  <td><SelectQueryValOne value = {this.state.val1} changed = {this.selectVal1}/></td>
                  <td><SelectQueryValTwo value = {this.state.val2} changed = {this.selectVal2}/></td>
                  <td><RunQueryButton count = {this.state.querycount} clicked = {this.runQueryEvent}/></td>
                  </tr>
                </table>
                </div>
            </div>
          );
        }
  }
}
export default App;
