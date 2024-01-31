import { useEffect, useRef, useContext } from "react";
import logo from "../../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { authContext } from "../../context/authContext";

const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, token, role } = useContext(authContext);
  console.log(token, user);

  const handleStickyHeader = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      headerRef.current.classList.add("sticky");
    } else {
      headerRef.current.classList.remove("sticky");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      handleStickyHeader();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ------------ logo ---------------- */}
          <div>
            <img src={logo} alt="" />
          </div>

          {/* ------------ menu ---------------- */}

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, key) => (
                <li key={key}>
                  <NavLink
                    to={link.path}
                    className="text-textColor text-[16px] hover:text-primaryColor leafing-7 font-[500]"
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ------------ nav right ---------------- */}

          <div className="flex items-center gap-4">
            {token && user ? (
              <div>
                <Link
                  to={`${
                    role === "doctor"
                      ? "/doctors/profile/me"
                      : "/users/profile/me"
                  }`}
                >
                  <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                    <img
                      src={user?.photo}
                      alt="..."
                      className="w-full rounded-full"
                    />
                  </figure>
                </Link>
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-primaryColor text-white py-2 px-6 font-[600] h-[44px] flex justify-center items-center rounded-[50px]">
                  Login
                </button>
              </Link>
            )}

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer"></BiMenu>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
