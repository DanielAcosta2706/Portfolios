import { useState } from "react";

export const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="section" id="qualification">
      <h2 className="section_Title">Qualification</h2>
      <span className="section_Subtitle">My personal journey</span>
      <div className="lg:cont mx-mbottm15 grid">
        <div className="mb-mbottm2 flex justify-center">
          <div
            className={
              toggleState === 1
                ? "qualification_ButtonOpen"
                : "qualification_ButtonClose"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification_Icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification_ButtonOpen"
                : "qualification_ButtonClose"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification_Icon"></i>
            Experience
          </div>
        </div>
        <div className="grid justify-center sm:grid-cols-[0.5fr]">
          <div
            className={
              toggleState === 1
                ? "qualification_Content-active"
                : "qualification_Content"
            }
          >
            <div className="qualification_Data">
              <div className="qualification_Box">
                <h3 className="qualification_Title">Web Design</h3>
                <span className="qualification_Subtitle">
                  Venezuela - Institute
                </span>
                <div className="qualification_Calendar">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
                </div>
              </div>
              <div>
                <span className="qualification_Rounded"></span>
                <span className="qualification_Line"></span>
              </div>
            </div>
            <div className="qualification_Data">
              <div></div>
              <div>
                <span className="qualification_Rounded"></span>
                <span className="qualification_Line"></span>
              </div>
              <div>
                <h3 className="qualification_Title">Art Director</h3>
                <span className="qualification_Subtitle">
                  Venezuela - Institute
                </span>
                <div className="qualification_Calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - 2021
                </div>
              </div>
            </div>
            <div className="qualification_Data">
              <div className="qualification_Box">
                <h3 className="qualification_Title">Web Development</h3>
                <span className="qualification_Subtitle">
                  Venezuela - Institute
                </span>
                <div className="qualification_Calendar">
                  <i className="uil uil-calendar-alt"></i>2018 - 2020
                </div>
              </div>
              <div>
                <span className="qualification_Rounded"></span>
                <span className="qualification_Line"></span>
              </div>
            </div>
            <div className="qualification_Data">
              <div></div>
              <div>
                <span className="qualification_Rounded"></span>
                <span className="qualification_Line"></span>
              </div>
              <div>
                <h3 className="qualification_Title">UX Expert</h3>
                <span className="qualification_Subtitle">
                  Venezuela - Institute
                </span>
                <div className="qualification_Calendar">
                  <i className="uil uil-calendar-alt"></i>2017 - 2018
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification_Content qualification_Content-active"
                : "qualification_Content"
            }
          >
            <div className="qualification_Data">
              <div className="qualification_Box">
                <h3 className="qualification_Title">Product Designer</h3>
                <span className="qualification_Subtitle">
                  Microsoft - Venezuela
                </span>
                <div className="qualification_Calendar">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
                </div>
              </div>
              <div>
                <span className="qualification_Rounded"></span>
                <span className="qualification_Line"></span>
              </div>
            </div>
            <div className="qualification_Data">
              <div></div>
              <div>
                <span className="qualification_Rounded"></span>
                <span className="qualification_Line"></span>
              </div>
              <div>
                <h3 className="qualification_Title">UX Designer</h3>
                <span className="qualification_Subtitle">
                  Apple Inc - Venezuela
                </span>
                <div className="qualification_Calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - 2021
                </div>
              </div>
            </div>
            <div className="qualification_Data">
              <div className="qualification_Box">
                <h3 className="qualification_Title">Web Designer</h3>
                <span className="qualification_Subtitle">
                  Figma - Venezuela
                </span>
                <div className="qualification_Calendar">
                  <i className="uil uil-calendar-alt"></i>2018 - 2020
                </div>
              </div>
              <div>
                <span className="qualification_Rounded"></span>
                <span className="qualification_Line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
