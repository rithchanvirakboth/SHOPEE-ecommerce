import React from "react";

function Box({children}) {
  return (
    <>
      <div className="box">
        <div className="row">
          <div className="col-12">
            <div className="box-header text-center mx-3">
              <h1 className="box-h1">{ children.title }</h1>
            </div>
            <div className="box-body text-center mx-3">
              <p className="box-p">{ children.desc }</p>
              <p className="box-p">{ children.number }</p>
            </div>
            <div className="box-button mx-3">
              <button className="btn-admin">{ children.btn }</button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Box;
