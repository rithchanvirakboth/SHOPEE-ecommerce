import React, { useEffect, useState } from "react";
import Box from "../../components/Box/Box";
import { useDispatch, useSelector } from "react-redux";
import { dispatchGetAllUsers, fetchAllUsers } from "../../Redux/Actions/usersAction";

function Admin() {
  const users = useSelector((state) => state.usersReducer);
  const auth = useSelector((state) => state.authReducer);
  const token = useSelector((state) => state.tokenReducer);
  const { isAdmin } = auth; 
  const [callback] = useState(false);
  const allUsersLength = users.data.length;
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAdmin) {
      async function getAllUsers() {
        return fetchAllUsers(token).then((res) => {
          dispatch(dispatchGetAllUsers(res));
        });
      }
      getAllUsers();
    }
  }, [token, isAdmin, dispatch, callback]);
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
                <Box
                  children={{
                    title: "Users Management",
                    number: allUsersLength,
                    desc: "account",
                    btn: "Manage",
                    link: "/admin/user",
                  }}
                />
              </div>
              <div className="col-12 col-lg-3 col-md-12 col-sm-12 mb-2">
                <Box
                  children={{
                    title: "Products Management",
                    desc: "products",
                    number: "100",
                    btn: "Manage",
                    link: "/admin/product",
                  }}
                />
              </div>
              <div className="col-12 col-lg-3 col-md-12 col-sm-12 mb-2">
                <Box
                  children={{
                    title: "Purchased Management",
                    desc: "purchasement",
                    number: "100",
                    btn: "Manage",
                    link: "/admin/purchasement",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
