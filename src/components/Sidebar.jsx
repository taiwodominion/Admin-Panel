import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import messageIcon from "../assets/icons/message-question 1.png";
import discountIcon from "../assets/icons/discount-shape 1.png";
import userIcon from "../assets/icons/user-square 1.png";
import walletIcon from "../assets/icons/wallet-money 2.png";
import productIcon from "../assets/icons/3d-square 1.png";
import dashboardIcon from "../assets/icons/key-square.png";
import settingIcon from "../assets/icons/setting 1.png";
import "../css/Sidebar.css";

const Sidebar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const navItems = [
    { label: "Dashboard", to: "/", icon: dashboardIcon },
    { label: "Product", to: "/product", icon: productIcon },
    { label: "Customers", to: "/customers", icon: userIcon },
    { label: "Income", to: "/income", icon: walletIcon },
    { label: "Promote", to: "/promote", icon: discountIcon },
    { label: "Help", to: "/help", icon: messageIcon },
  ];

  return (
    <div className="sidebar-wrapper">
      {/* ✅ Hamburger Button */}
      <button
        className={`hamburger ${menuActive ? "active" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          setMenuActive((s) => !s);
        }}
        type="button"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* ✅ Sidebar */}
      <aside className={`sidebar ${menuActive ? "show" : ""}`}>
        <div className="container">
          <div className="sidebar-header">
            <div className="logo">
              <img src={settingIcon} alt="logo" />
              <h1>
                Dashboard <small>v.01</small>
              </h1>
            </div>
          </div>

          <nav className="sidebar-nav">
            {navItems.map(({ label, to, icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `nav-item ${isActive ? "active" : ""}`
                }
              >
                <div className="nav-item-name">
                  <img src={icon} alt="" className="nav-icon-img" />
                  <span className="nav-label">{label}</span>
                </div>
                <FontAwesomeIcon icon={faChevronRight} className="nav-icon" />
              </NavLink>
            ))}
          </nav>

          <div className="sidebar-footer">
            <div className="footer-card">
              <p>Upgrade to PRO to get access to all Features!</p>
              <button>Get Pro Now!</button>
            </div>
            <div className="footer-user">
              <div className="footer-user-info">
                <h2>Evano</h2>
                <p>Project Manager</p>
              </div>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
