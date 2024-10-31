import { useState } from "react";

export const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section_Title">Services</h2>
      <span className="section_Subtitle">What I offer</span>
      <div className="lg:cont mx-mbottm15 grid auto-cols-max grid-cols-1 justify-center gap-5 smx:grid-cols-2 mdx:gap-7 md:grid-cols-[220px_220px_220px] lgx:grid-cols-3">
        <div className="services_Content">
          <div>
            <i className="uil uil-web-grid services_Icon"></i>
            <h3 className="services_Title">
              Product <br /> Designer
            </h3>
            <span className="demo_Button" onClick={() => toggleTab(1)}>
              View More
              <i className="uil uil-arrow-right demo_Button-icon"></i>
            </span>
            <div
              className={toggleState === 1 ? "open_Services" : "close_Services"}
            >
              <div className="services_Modal-content">
                <i
                  className="uil uil-times services_Modal-close"
                  onClick={() => toggleTab(0)}
                ></i>
                <h3 className="services_Modal-title">Product Designer</h3>
                <p className="services_Modal-description">
                  Sevice with more than 3 years of experience. Providing quality
                  work to clients and companies.
                </p>
                <ul className="services_Modal-services">
                  <li className="services_Modal-service">
                    <i className="uil uil-check-circle services_Modal-icon"></i>
                    <p className="services_Modal-info">
                      I develop the user interface.
                    </p>
                  </li>
                  <li className="services_Modal-service">
                    <i className="uil uil-check-circle services_Modal-icon"></i>
                    <p className="services_Modal-info">
                      Web page development..
                    </p>
                  </li>
                  <li className="services_Modal-service">
                    <i className="uil uil-check-circle services_Modal-icon"></i>
                    <p className="services_Modal-info">
                      I create ux element interactions.
                    </p>
                  </li>
                  <li className="services_Modal-service">
                    <i className="uil uil-check-circle services_Modal-icon"></i>
                    <p className="services_Modal-info">
                      I position your company brand.
                    </p>
                  </li>
                  <li className="services_Modal-service">
                    <i className="uil uil-check-circle services_Modal-icon"></i>
                    <p className="services_Modal-info">
                      Design and mockups of products for companies.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="services_Content border__box">
          <div>
            <i className="uil uil-arrow services_Icon"></i>
            <h3 className="services_Title">
              Ui/Ux <br /> Designer
            </h3>
            <span className="demo_Button" onClick={() => toggleTab(2)}>
              View More
              <i className="uil uil-arrow-right demo_Button-icon"></i>
            </span>
            <div
              className={toggleState === 2 ? "open_Services" : "close_Services"}
            >
              <div className="services_Modal-content">
                <i
                  className="uil uil-times services_Modal-close"
                  onClick={() => toggleTab(0)}
                ></i>
                <h3 className="services_Modal-title">Ui/Ux Designer</h3>
                <p className="services_Modal-description">
                  Sevice with more than 3 years of experience. Providing quality
                  work to clients and companies.
                </p>
                <ul className="services_Modal-services">
                  <li className="services_Modal-service">
                    <i className="uil uil-check-circle services_Modal-icon"></i>
                    <p className="services_Modal-info">
                      I develop the user interface.
                    </p>
                  </li>
                  <li className="services_Modal-service">
                    <i className="uil uil-check-circle services_Modal-icon"></i>
                    <p className="services_Modal-info">
                      Web page development..
                    </p>
                  </li>
                  <li className="services_Modal-service">
                    <i className="uil uil-check-circle services_Modal-icon"></i>
                    <p className="services_Modal-info">
                      I create ux element interactions.
                    </p>
                  </li>
                  <li className="services_Modal-service">
                    <i className="uil uil-check-circle services_Modal-icon"></i>
                    <p className="services_Modal-info">
                      I position your company brand.
                    </p>
                  </li>
                  <li className="services_Modal-service">
                    <i className="uil uil-check-circle services_Modal-icon"></i>
                    <p className="services_Modal-info">
                      Design and mockups of products for companies.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="services_Content border__box">
          <div>
            <i className="uil uil-edit services_Icon"></i>
            <h3 className="services_Title">
              Visual <br /> Designer
            </h3>
            <span className="demo_Button" onClick={() => toggleTab(3)}>
              View More
              <i className="uil uil-arrow-right demo_Button-icon"></i>
            </span>
            <div
              className={toggleState === 3 ? "open_Services" : "close_Services"}
            >
              <div className="services_Modal-content">
                <i
                  className="uil uil-times services_Modal-close"
                  onClick={() => toggleTab(0)}
                ></i>
                <h3 className="services_Modal-title">Visual Designer</h3>
                <p className="services_Modal-description">
                  Sevice with more than 3 years of experience. Providing quality
                  work to clients and companies.
                </p>
                <ul className="services_Modal-services">
                  <li className="services_Modal-service">
                    <i className="uil uil-check-circle services_Modal-icon"></i>
                    <p className="services_Modal-info">
                      I develop the user interface.
                    </p>
                  </li>
                  <li className="services_Modal-service">
                    <i className="uil uil-check-circle services_Modal-icon"></i>
                    <p className="services_Modal-info">
                      Web page development..
                    </p>
                  </li>
                  <li className="services_Modal-service">
                    <i className="uil uil-check-circle services_Modal-icon"></i>
                    <p className="services_Modal-info">
                      I create ux element interactions.
                    </p>
                  </li>
                  <li className="services_Modal-service">
                    <i className="uil uil-check-circle services_Modal-icon"></i>
                    <p className="services_Modal-info">
                      I position your company brand.
                    </p>
                  </li>
                  <li className="services_Modal-service">
                    <i className="uil uil-check-circle services_Modal-icon"></i>
                    <p className="services_Modal-info">
                      Design and mockups of products for companies.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
