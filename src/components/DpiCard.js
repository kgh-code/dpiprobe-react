import React from 'react';

const DpiCard = props => {
  return(
    <div className="card has-background-info-light">
      <div className="card-content">
        <div className="content has-text-centered">
          <div className="columns">
              <div className="column is-12 has-text-centerd">
                    <label className="has-text-success  is-size-1 has-text-weight-bold">{props.data.dpi}</label>
              </div>
          </div>
          <div className="columns">
              <div className="column is-3">
              </div>
              <div className="column is-2 has-text-centerd is-size-3">
                  <label>Client</label>
              </div>
              <div className="column is-2 has-text-centerd is-size-3">
                  <label>Office</label>
              </div>
              <div className="column is-2 has-text-centerd is-size-3">
                  <label>Device</label>
              </div>
              <div className="column is-3">
              </div>
          </div>
          <div className="columns">
              <div className="column is-3">
              </div>
              <div className="column is-2 has-text-centerd is-size-3">
                  <label>{props.data.clientID}</label>
              </div>
              <div className="column is-2 has-text-centerd is-size-3">
                  <label>{props.data.officeID}</label>
              </div>
              <div className="column is-2 has-text-centerd is-size-3">
                  <label>{props.data.deviceID}</label>
              </div>
              <div className="column is-3">
              </div>
          </div>
        </div>
      </div>
    </div>
  )
};
export default DpiCard;
