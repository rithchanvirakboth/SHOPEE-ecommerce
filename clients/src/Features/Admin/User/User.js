import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  fetchAllUsers,
  dispatchGetAllUsers,
} from "../../../Redux/Actions/usersAction";
import { DUMMY_DATA } from "../../../utils/const";

function User() {
  const users = useSelector((state) => state.usersReducer);
  const auth = useSelector((state) => state.authReducer);
  const token = useSelector((state) => state.tokenReducer);
  const [callback] = useState(false);
  const { isAdmin } = auth;
  const newData = users.data;

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
    <div className="user-dashboard my-4 overflow-auto">
      <h3 className="text-center mb-4">User Dashboard</h3>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name"
          aria-label="Search by name"
          aria-describedby="button-addon2"
        />
        <button className="btn btn-secondary" type="button" id="button-addon2">
          Search
        </button>
      </div>
      <div className="input-group mb-3 d-flex justify-content-between">
        <div className="d-flex flex-row">
          <div className="p-2 d-flex align-items-center">
            <label htmlFor="lastName" className="form-label">
              Filter by
            </label>
          </div>
          <div className="p-2 d-flex align-items-center">
            {/* <select className="form-select" aria-label="Default select example">
              <option selected>select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select> */}
          </div>
          <div className="p-2 d-flex align-items-center">
            <button
              className="btn btn-secondary"
              type="button"
              id="button-addon2"
            >
              Filter
            </button>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <a href="/admin/user/createUser" className="btn btn-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-plus-lg me-1"
              viewBox="0 0 16 20"
            >
              <path
                fillRule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
              />
            </svg>{"Create"}
          </a>
        </div>
      </div>

      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col" className="text-center">
              No.{" "}
            </th>
            <th scope="col" className="text-center col-2">
              Full Name
            </th>
            <th scope="col" className="text-center col-2">
              Username
            </th>
            <th scope="col" className="text-center col-2">
              Email
            </th>
            <th scope="col" className="text-center col-3">
              Address
            </th>
            <th scope="col" className="text-center col-3">
              Phone Number
            </th>
            <th colSpan={4} className="text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {newData?.map((user, index) => (
            <tr key={index}>
              <th scope="row" className="text-center">
                {index + 1}
              </th>
              <td className="col-2 text-center">
                {user.lastName} {user.firstName}
              </td>
              <td className="col-2 text-center">{user.userName}</td>
              <td className="col-2 text-center">{user.email}</td>
              <td className="col-3 text-center text-break">
                {user.address || DUMMY_DATA.ADDRESS}
              </td>
              <td className="col-3 text-center">
                {user.phoneNumber || DUMMY_DATA.PHONE}
              </td>
              <td className="text-center">
                <a
                  href={`/admin/user/update/${user._id}`}
                  className="btn btn-primary"
                >
                  Update
                </a>
              </td>
              <td className="text-center">
                <a
                  href={`/admin/user/update/${user._id}`}
                  className="btn btn-danger"
                >
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;
