import React from "react";
import Box from "../../components/Box/Box";
function mainsite() {
  return (
    <>
      <div className="mainsite container">
        <div className="row mb-3">
          <div className="col-12 mt-4">
            <div className="header text-center mt-4">
              <h1 className="admin-h1">DASHBOARD</h1>
            </div>
          </div>
          <div className="col-12 mt-4">
            <div className="row d-flex justify-content-around ">
              <div className="col-12 col-lg-3 col-md-12 col-sm-12 mb-2">
                <Box children={
                  {
                    title: "Users Management",
                    number: "100",
                    desc: "account",
                    btn: "Manage"
                  }
                } />
              </div>
              <div className="col-12 col-lg-3 col-md-12 col-sm-12 mb-2">
              <Box children={
                 {
                  title: "Products Management",
                  desc: "products",
                  number: "100",
                  btn: "Manage"
                }
              } />
              </div>
              <div className="col-12 col-lg-3 col-md-12 col-sm-12 mb-2">
              <Box children={
                 {
                  title: "Purchased Management",
                  desc: "purchasement",
                  number: "100",
                  btn: "Manage"
                }
              } />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default mainsite;
