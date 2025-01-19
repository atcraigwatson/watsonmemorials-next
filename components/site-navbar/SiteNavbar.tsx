import NavbarLogoIcon from "./NavbarLogoIcon";
import NavbarToggler from "./NavbarToggler";
import NavbarCollapse from "./NavbarCollapse";

const SiteNav = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-faded" id="siteNavbar">
      <div className="container-fluid">
        <NavbarLogoIcon />
        <NavbarToggler />
        <NavbarCollapse />
      </div>
    </nav>
  );
};

export default SiteNav;
