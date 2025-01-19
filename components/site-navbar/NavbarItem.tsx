"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  label: string;
}

const NavbarItem: React.FC<Props> = (props) => {
  const pathname = usePathname();
  const active = pathname === props.path;
  // Needs aria-current="page" adding to active link
  return (
    <li className="nav-item">
      <Link className={active ? "nav-link active" : "nav-link"} href={props.path}>
        {props.label}
      </Link>
    </li>
  );
};
export default NavbarItem;
