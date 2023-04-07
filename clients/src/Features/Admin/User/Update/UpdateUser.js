import React from "react";

function UpdateUser() {
  return (
    <div className="container my-4">
      <div className="d-flex justify-content-center my-4">
        <div className="card" style={{ width: "50rem" }}>
          <div className="update-header">
            <h3 className="text-center">Update User</h3>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input type="text" className="form-control" id="firstName" />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input type="text" className="form-control" id="lastName" />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Username
                </label>
                <input type="text" className="form-control" id="lastName" />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Bio
                </label>
                <input type="text" className="form-control" id="lastName" />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Phone Number
                </label>
                <input type="text" className="form-control" id="lastName" />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Address
                </label>
                <input type="text" className="form-control" id="lastName" />
              </div>
              <div className="my-4">
                <label htmlFor="lastName" className="form-label invisible">
                  label
                </label>
                <button type="submit" className="btn-submit">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateUser;
