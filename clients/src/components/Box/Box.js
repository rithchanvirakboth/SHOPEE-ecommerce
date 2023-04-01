import React from "react";

function Box({children}) {
  return (
    <>
      <div className="box">
        <div className="row">
          <div className="col-12 d-flex flex-column">
            <div className="box-header text-center mx-3">
              <h1 className="box-h1">{ children.title }</h1>
            </div>
            <div className="box-body text-center mx-3 mt-4">
              <h3 className="box-h3">{ children.number }</h3>
              <h5 className="box-h4">{ children.desc }</h5>
            </div>
            <div className="box-button text-center mx-3 mb-3">
              <a className="btn-admin" href={ children.link } >{ children.btn }</a>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Box;
