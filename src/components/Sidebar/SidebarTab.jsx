import React from "react";
import c from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

function SidebarTab(props) {
  return (
    <NavLink to={props.pathname} className={c.sidebar_tab_link}>
      <div className={c.sidebar_tab}>
        <div className={c.sidebar_tab_icon}>
          <img src={props.iconUrl} alt="icon" />
        </div>
        <div className={c.sidebar_tab_name}>{props.tabName}</div>
      </div>
    </NavLink>
  );
}

export default SidebarTab;
