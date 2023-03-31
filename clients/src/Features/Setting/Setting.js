import React from "react";
import BoxSetting from "../../components/BoxSetting/BoxSetting";
import { useSelector } from "react-redux";

function Setting() {
  const auth = useSelector((state) => state.authReducer);
  const { user } = auth;

  return (
    <div className="Setting container">
      <div class="row col-12 d-flex justify-content-center">
        <div class="p-2 col-12 col-lg-5 d-none d-lg-block mt-3">
          <div className="d-flex justify-content-center">
            <BoxSetting
              children={
                <div className="setting-infor d-flex flex-column justify-content-center">
                  <div className="header-top mt-4">INFORMATION</div>
                  <div className="body-content mt-3">
                    <div className="row d-flex justify-content-center">
                      <div className="col-12">
                        <img
                          src={user.data?.avatar}
                          alt="avatar"
                          width="70px"
                          height="70px"
                          className="avatar"
                        />
                      </div>
                      <div className="col-12 text-center mx-3">
                        <h6 className="infor-label">Full Name</h6>
                        <p className="text-center">
                          { user.data?.lastName || "--" }{" "}
                          { user.data?.firstName || "--" }
                        </p>
                      </div>
                      <div className="col-12 text-center mx-3">
                        <h6 className="infor-label">username</h6>
                        <p className="text-center">
                          { user.data?.userName || "--" }
                        </p>
                      </div>
                      <div className="col-12 text-center mx-3">
                        <h6 className="infor-label">Email</h6>
                        <p className="text-center">
                          { user.data?.email || "--" }
                        </p>
                      </div>
                      <div className="col-12 text-center mx-3">
                        <h6 className="infor-label">Bio</h6>
                        <p className="text-center text-break">
                          { user.data?.bio || "--" }
                        </p>
                      </div>
                      <div className="col-12 text-center mx-3">
                        <h6 className="infor-label">Phone Number</h6>
                        <p className="text-center">
                          { user.data?.phoneNumber || "--" }
                        </p>
                      </div>
                      <div className="col-12 text-center mx-3">
                        <h6 className="infor-label">Address</h6>
                        <p className="text-center">
                          { user.data?.address || "--" }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              }
            />
          </div>
        </div>
        <div className="p-2 col-12 col-md-12 col-sm-12 d-block d-lg-none  mt-3">
          <div className="d-flex justify-content-center">
            <BoxSetting children={
              <div className="setting-small d-flex flex-column justify-content-center">
                <h4 className="header-top mt-2 mb-2">INFORMATION</h4>
                <div className="data d-flex-flex-row text-start">
                <span className="header-top text-start me-2">Name: </span><span className="text-start">{ user.data?.lastName || "--" }{" "}{ user.data?.firstName || "--" }</span>
                </div>
                <div className="data d-flex-flex-row text-start">
                <span className="header-top text-start me-2">Username: </span><span className="text-start">{ user.data?.userName || "--" }</span>
                </div>
                <div className="data d-flex-flex-row text-start">
                <span className="header-top text-start me-2">Email: </span><span className="text-start">{ user.data?.email || "--" }</span>
                </div>
                <div className="data d-flex-flex-row text-start">
                <span className="header-top text-start me-2">Phone Number: </span><span className="text-start">{ user.data?.phoneNumber || "--" }</span>
                </div>
                <div className="data d-flex-flex-row text-start">
                <span className="header-top text-start me-2">Address: </span><span className="text-start">{ user.data?.address || "--" }</span>
                </div>
              </div>
              
                
            }/>
          </div>
        </div>
        <div class="p-2 bg-warning col-12 col-lg-5 col-md-12 col-sm-12 mt-3">
          Hii
        </div>
      </div>
    </div>
  );
}

export default Setting;
