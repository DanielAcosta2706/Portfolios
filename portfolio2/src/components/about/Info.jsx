export const Info = () => {
  return (
    <div className="mb-mbottm2 grid grid-cols-2 gap-2 sm:grid-cols-3">
      <div className="about_Box">
        <i className="bx bx-award about_Icon"></i>
        <h3 className="about_Title">Experience</h3>
        <span className="about_Subtitle">8 Years Working</span>
      </div>
      <div className="about_Box">
        <i className="bx bx-briefcase-alt about_Icon"></i>
        <h3 className="about_Title">Completed</h3>
        <span className="about_Subtitle">48 + Projects</span>
      </div>
      <div className="about_Box">
        <i className="bx bx-support about_Icon"></i>
        <h3 className="about_Title">Support</h3>
        <span className="about_Subtitle">Online 24/7</span>
      </div>
    </div>
  );
};
