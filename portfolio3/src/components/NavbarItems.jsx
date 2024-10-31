import PropTypes from "prop-types";

export const NavbarItems = ({ lastActiveLink, activeCurrentLink }) => {
  const navItems = [
    {
      id: 1,
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      id: 2,
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      id: 3,
      label: "Work",
      link: "#work",
      className: "nav-link",
    },
    {
      id: 4,
      label: "Reviews",
      link: "#reviews",
      className: "nav-link",
    },
    {
      id: 5,
      label: "Contact",
      link: "#contact",
      className: "nav-link md:hidden",
    },
  ];

  return (
    <>
      {navItems.map((item) => (
        <a
          key={item.id}
          href={item.link}
          ref={item.ref}
          className={item.className}
          onClick={activeCurrentLink}
        >
          {item.label}
        </a>
      ))}
    </>
  );
};

NavbarItems.propTypes = {
  lastActiveLink: PropTypes.object.isRequired,
  activeCurrentLink: PropTypes.func.isRequired,
};
