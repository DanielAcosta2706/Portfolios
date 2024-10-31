export const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUP = document.querySelector(".scrollup");
    if (this.scrollY >= 560) scrollUP.classList.add("show-scroll");
    else scrollUP.classList.remove("show-scroll");
  });

  return (
    <a href="#" className="scrollup trasition_Scrollup">
      <i className="uil uil-arrow-up text-xl text-containerColor lgx:text-2xl"></i>
    </a>
  );
};
