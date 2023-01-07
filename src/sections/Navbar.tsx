import { useScrolling } from "../hooks/useScrolling";
import { logo } from "../assets";

export default function Navbar() {
  const { scroll } = useScrolling();

  return (
    <div className={`navbar-sticky sm:hidden ${scroll && "visible"}`}>
      <a href="#home">
        <img
          src={logo}
          className="w-[200px]"
          alt="Logo"
        />
      </a>
    </div>
  );
}
