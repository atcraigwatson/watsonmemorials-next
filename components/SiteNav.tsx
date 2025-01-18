import NavLink from "./NavLink";

const SiteNav = () => {
  return (
    <header className="bg-white/50">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <h2 className="text-2xl text-gray-700 py-5">Next.js Project</h2>
        <nav>
          <ul className="flex gap-x-7 text-gray-700 text-sm">
            <li>
              <NavLink text="Home" path="/" />
            </li>
            <li>
              <NavLink text="About" path="/about" />
            </li>
            <li>
              <NavLink text="Contact" path="/contact" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default SiteNav;
