import React from "react";
import {
  BRAND_FOOTER,
  MENU,
  TITLE,
  MENU_HELP,
  MENU_CONTACT_US,
} from "../../utils/const";

function Footer() {
  return (
    <>
      <div className="row mt-4">
        <div className="col-lg-3 d-none d-lg-block d-xl-block mb-3">
          <div className="d-flex justify-content-center">
            <div>
              <div className="d-flex justify-content-center">
                <div className="d-flex flex-column">
                  <div className="py-2">
                    {BRAND_FOOTER.map((brand, index) => (
                      <div
                        className="d-flex justify-content-center"
                        key={index}
                      >
                        <img
                          src={brand.Logo}
                          alt={brand.name}
                          width="200px"
                          height="100px"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="py-2 px-4">
                    {BRAND_FOOTER.map((brand, index) => (
                      <div className="" key={index}>
                        <p className="text-center">{brand.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mb-3">
          <div className="d-flex justify-content-center">
            <div>
              <h5 className="text-center">{TITLE.SERVICE}</h5>
              <ul className="list-unstyled text-small text-center">
                {MENU.map((menu, index) => (
                  <li key={index}>
                    <a href={menu.link} className="text-muted">
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mb-3">
          <div className="d-flex justify-content-center">
            <div>
              <h5 className="text-center">{TITLE.HELP}</h5>
              <ul className="list-unstyled text-small text-center">
                {MENU_HELP.map((menu, index) => (
                  <li key={index}>
                    <a href={menu.link} className="text-muted">
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mb-3">
          <div className="d-flex justify-content-center">
            <div>
              <h5 className="text-center">{TITLE.CONTACT_US}</h5>
              <ul className="list-unstyled text-small text-center">
                {MENU_CONTACT_US.map((menu, index) => (
                  <li key={index}>
                    <p className="mb-0 mt-2">{menu.name}</p>
                    {menu.socialMedia === true ? (
                      <div className="d-flex justify-content-center">
                        {menu.socialLink.map((social, index) => (
                          <div
                            className="d-flex justify-content-center"
                            key={index}
                          >
                            <a href={social.link} className="text-muted">
                              <span className="mx-2">{social.logo}</span>
                            </a>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <span className="text-center">{menu.item}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-sm-row justify-content-center border-top text-center">
        <p className="mt-3">© 2023 Company, Inc. All rights reserved.</p>
      </div>
    </>
  );
}

export default Footer;
