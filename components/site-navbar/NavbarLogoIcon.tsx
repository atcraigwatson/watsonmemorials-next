import Link from "next/link";
import Image from "next/image";

const NavbarLogoIcon = () => {
  return (
    <Link className="navbar-brand" href="/">
      <Image
        src={"./watson-memorials-logo-icon.svg"}
        alt="Watson Memorials Logo Icon"
        height={30}
        width={41}
        className="d-inline-block align-top"
        id="navbar-logo-text-right"
      />
      <span className="visually-hidden">Watson Memorials</span>
    </Link>
  );
};

export default NavbarLogoIcon;
