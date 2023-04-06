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
        <button
          className="btn btn-secondary"
          type="button"
          id="button-addon2"
        >
          Search
        </button>
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend me-2">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            Filter by
          </label>

        </div>
        <select className="custom-select" id="inputGroupSelect01">
          <option defaultValue>Choose...</option>
          <option value="1">Name</option>
          <option value="2">Username</option>
          <option value="3">Email</option>
          <option value="3">Address</option>
          <option value="3">Phone Number</option>
        </select>

        <div className="reset ms-2">
          <button className="btn btn-reset btn-secondary" type="button">
            Reset 
          </button>
        </div>
      </div>

       <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col" className="text-center">No. </th>
            <th scope="col" className="text-center col-2">Full Name</th>
            <th scope="col" className="text-center col-2">Username</th>
            <th scope="col" className="text-center col-2">Email</th>
            <th scope="col" className="text-center col-3">Address</th>
            <th scope="col" className="text-center col-3">Phone Number</th>
            <th colSpan={4} className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {newData?.map((user, index) => (
            <tr key={index}>
              <th scope="row" className="text-center">
                {index + 1}
              </th>
              <td className="col-2 text-center">{ user.lastName } { user.firstName }</td>
              <td className="col-2 text-center">{user.userName}</td>
              <td className="col-2 text-center">{user.email}</td>
              <td className="col-3 text-center text-break">{user.address || DUMMY_DATA.ADDRESS }</td>
              <td className="col-3 text-center">{user.phoneNumber || DUMMY_DATA.PHONE }</td>
              <td className="text-center"> 
                <button className="btn btn-success">Edit</button>
              </td>
              <td className="text-center">
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;
