import React from "react";

function Card({ children }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-center">{children.title}</h5>
        <div className="card-text">
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

export default Card;
