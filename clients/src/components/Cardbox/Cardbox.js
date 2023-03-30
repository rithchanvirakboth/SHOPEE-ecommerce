import React from "react";

function Cardbox({ children }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-center">{children.title}</h5>
        <div className="card-text">
          {children.formData.map((item, index) => {
            return (
              <div key={index} className="form-group">
                {item.btnType === true ? (
                  <>
                  <div className="d-flex flex-row justify-content-between">
                    {item.linkItem.map((link, index) => {
                        return (
                          <div key={index} className="pt-3">
                            <span className="link me-1">{link.linkLabel}</span><a href={link.link} className="redirect">{link.linkName}</a>
                          </div>
                        );
                      })}
                    </div>
                    <div className="btn-group">{item.btn}</div>
                    </>
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
