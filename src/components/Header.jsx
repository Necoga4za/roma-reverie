import React from "react";
import { NavLink } from "react-router-dom";

const styles = {
  container: {
    width: "1920px",
    height: "160px",
    backgroundColor: "#F5F5F5",
    display: "flex",
    alignItems: "center",
    padding: "0 100px",
    boxSizing: "border-box",
    fontFamily: "Gmarket Sans, sans-serif",
  },
  logo: {
    width: "89px",
    height: "89px",
    backgroundColor: "#ED1E21",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",
    marginRight: "840px",
  },
  logoImg: {
    width: "100%",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: "60px",
  },
  link: {
    textDecoration: "none",
    color: "#1B1B1B",
    fontSize: "24px",
    fontWeight: "500",
  },
  activeLink: {
    textDecoration: "none",
    color: "#ED1E21",
    fontSize: "24px",
    fontWeight: "700",
  },
};

const Header = () => {
  return (
    <div style={styles.container}>
      {/* 로고에 NavLink 추가 */}
      <NavLink to="/journey" style={{ textDecoration: "none" }}>
        <div style={styles.logo}>
          <img src="/img/logo.png" alt="logo" style={styles.logoImg} />
        </div>
      </NavLink>
      
      <nav style={styles.nav}>
        <NavLink to="/journey" style={({ isActive }) => isActive ? styles.activeLink : styles.link}>Journey</NavLink>
        <NavLink to="/gallery" style={({ isActive }) => isActive ? styles.activeLink : styles.link}>Gallery</NavLink>
        <NavLink to="/community" style={({ isActive }) => isActive ? styles.activeLink : styles.link}>Community</NavLink>
        <NavLink to="/checklist" style={({ isActive }) => isActive ? styles.activeLink : styles.link}>Check List</NavLink>
        <NavLink to="/info" style={({ isActive }) => isActive ? styles.activeLink : styles.link}>Info</NavLink>
      </nav>
    </div>
  );
};

export default Header;
