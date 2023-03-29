import React from "react";

function Cardbox({ children }) {
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title text-center">{children.title}</h5>
        <div class="card-text">
          {children.formData.map((item, index) => {
            return (
              <div key={index} className="form-group">
                {item.btnType === true ? (
                  <div className="btn-group">{item.btn}</div>
                ) : (
                  <div className="form-col">
                    <label className="label">{item.label}</label>
                    {item.item}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cardbox;
