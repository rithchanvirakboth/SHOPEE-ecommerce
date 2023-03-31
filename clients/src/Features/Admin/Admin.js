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
          <div class="col-12 mt-4">
            <div class="row d-flex justify-content-around ">
              <div class="col-12 col-lg-3 col-md-12 col-sm-12 mb-2">
                <Box children={
                  {
                    title: "Users Management",
                    desc: "Manage user account",
                    number: "10",
                    btn: "Manage"
                  }
                } />
              </div>
              <div class="col-12 col-lg-3 col-md-12 col-sm-12 mb-2">
              <Box children={
                 {
                  title: "Products Management",
                  desc: "Manage products for sale",
                  number: "10",
                  btn: "Manage"
                }
              } />
              </div>
              <div class="col-12 col-lg-3 col-md-12 col-sm-12 mb-2">
              <Box children={
                 {
                  title: "Purchased Management",
                  desc: "Manage customers purchasement",
                  number: "10",
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
