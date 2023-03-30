import React from "react";
import errorLogo from "../../Assets/error-image.png";
function NotFound() {
  return (
    <div className="NotFound container">
      <div className="d-flex justify-content-center  align-items-center">
        <div class="row">
          <div class="col-12 col-lg-12 col-md-12 col-sm-12">
            <div className="d-flex-flex-row">
              <div className="pt-2">
                <div className="logo">
                <img src={errorLogo} alt="error" width="400px" />
                </div>
              </div>
              <div className="pt-2 text-center">
              <h1>404</h1>
              <h2>Page Not Found</h2>
              <p className="notFound-context">
                The page you are looking for might have been removed had its name
                changed or is temporarily unavailable.
              </p>
              <a href="/" className="btn-notfound">
                Back to Home
              </a>
              </div>
            </div>
          </div>
            
        </div>
      </div>
    </div>
  );
}

export default NotFound;
