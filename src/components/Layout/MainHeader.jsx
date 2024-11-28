import React, { useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../../redux/features/authSlice";
import Logo from "../../assets/Logo.png";
import { TiThMenu } from "react-icons/ti";
import { CgClose } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { setMode } from "../../redux/propertiesSlice";

const MainHeader = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const mode = useSelector(store => store.properties.mode);
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const menuHandler = () => {
    setIsMobileMenu((isMobileMenu) => !isMobileMenu);
  };

  // const handleLogout = () => {
  //   dispatch(logout());
  //   menuHandler();
  //   history.replace("/login");
  // };

  let newStr = "";

  // for (const s of user) {
  //   newStr += s;
  //   if (s === "@") {
  //     break;
  //   }
  // }
  const truncatedString = newStr.replace("@", "");
  // console.log(truncatedString);

  // const btnContent = isAuthenticated ? "Logout" : "Login";
  const getStartedContent = "Get Started";

  const handleToggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    console.log('modeee', mode);
    dispatch(setMode(newMode));
  };

  const mobileMenu = (
    <div className="w-11/12 max-w-2xl mt-4 lg:hidden">
      <ul className=" flex-col px-6 text-ash  ">
        <li className="py-3">
          <NavLink to="/home" activeClassName="text-yellow" onClick={menuHandler}>
            Home
          </NavLink>
        </li>
        <li className="py-3">
          <NavLink
            to="/listings"
            activeClassName="text-yellow"
            onClick={menuHandler}
          >
            Properties
          </NavLink>
        </li>
        <li style={{ cursor: 'pointer' }} onClick={() => { handleToggleTheme(); }}>
          {mode == 'light' ? "Dark" : "Light"}
        </li>
        {/* <li className="py-3">
          <NavLink
            to="/agent"
            activeClassName="text-yellow"
            onClick={menuHandler}
          >
            Agents
          </NavLink>
        </li> */}
        {/* <li className="py-3">
          <NavLink to="/blog" activeClassName="text-yellow" onClick={menuHandler}>
            Blog
          </NavLink>
        </li> */}
      </ul>
      {/* <div className="flex justify-between py-3 pl-6">
        <button
          className="text-yellow font-medium text-base pr-5"
          onClick={isAuthenticated ? handleLogout : menuHandler}
        >
          {!isAuthenticated ? <Link to="/login">{btnContent}</Link> : "Logout"}
        </button>
        <button
          className="flex items-center ml-6 bg-yellow text-white font-bold text-xs p-3 px-3 rounded-lg shadow-md "
          onClick={menuHandler}
        >
          {" "}
          {isAuthenticated && (
            <div className="mr-3">
              <FaUser />
            </div>
          )}
          <Link to="/signup">{getStartedContent}</Link>
        </button>
      </div> */}
    </div>
  );

  return (
    <header className="z-10 w-full fixed bg-white dark:bg-darkBg top-0 p-4 px-6 lg:px-20 ">
      <nav className="flex lg:flex items-center justify-between px-6  font-Poppins">
        <div className="flex  items-center ">
          <div className="w-28 ">
            <img src={Logo} alt="macho-logo" width={70} height={70} />
          </div>
        </div>
        <ul className=" hidden lg:flex px-6 text-ash  ">
          <li>
            <NavLink to="/home" activeClassName="text-yellow" className="px-4">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/listings"
              activeClassName="text-yellow"
              className="px-4"
            >
              Properties
            </NavLink>
          </li>
          <li style={{ cursor: 'pointer' }} onClick={() => { handleToggleTheme(); }}>
            {mode == 'light' ? "Dark" : "Light"}
          </li>
          {/* <li>
            <NavLink to="/agent" activeClassName="text-yellow" className="px-4">
              Agents
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" activeClassName="text-yellow" className="px-4 ">
              Blog
            </NavLink>
          </li> */}
        </ul>
        {/* <div className="pl-18 hidden lg:flex ">
          <button
            className="text-yellow font-medium text-base pr-5"
            onClick={isAuthenticated ? handleLogout : () => null}
          >
            {!isAuthenticated ? (
              <Link to="/login">{btnContent}</Link>
            ) : (
              "Logout"
            )}
          </button>
          <button className="flex items-center bg-yellow text-white border-2 border-yellow font-bold text-xs py-2 px-4 hover:text-yellow hover:bg-white  hover:outline-yellow rounded-lg shadow-md ">
            {isAuthenticated && (
              <div className="mr-3 ">
                <FaUser />
              </div>
            )}
            <Link to="/signup">{getStartedContent}</Link>
          </button>
        </div> */}
        <div className="lg:hidden">
          <button onClick={menuHandler}>
            {!isMobileMenu ? (
              <TiThMenu className="text-5xl p-2" />
            ) : (
              <CgClose className="text-5xl p-2" />
            )}
          </button>
        </div>
      </nav>
      {isMobileMenu && mobileMenu}
    </header>
  );
};

export default MainHeader;
