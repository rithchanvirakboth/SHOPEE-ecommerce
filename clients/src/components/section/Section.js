import React from "react";

function Section({children}) {
  return (
    <section className="section">
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col-12">
            { children }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
