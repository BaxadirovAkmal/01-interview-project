import React from 'react';

const FloatCard = props => {
  return (
    <div className="container">
      <div className="row float-box">
        <div className="col">
          <div className="col-padding-box">
            <div className="col-title">Electrical Repair</div>
          </div>
        </div>
        <div className="col">
          <div className="col-padding-box">
            <div className="col-title">Truck Repair</div>
          </div>
        </div>
        <div className="col">
          <div className="col-padding-box">
            <div className="col-title">Biman Repair</div>
          </div>
        </div>
        <div className="col">
          <div className="col-padding-box">
            <div className="col-title">Ships Repair</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FloatCard;