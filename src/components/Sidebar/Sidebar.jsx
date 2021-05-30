import React from "react";
import SidebarTab from "./SidebarTab";
import s from "./Sidebar.module.css";
import bookIcon from "../../common/img/sidebar/book.png";
import fileIcon from "../../common/img/sidebar/file.png";
import peopleIcon from "../../common/img/sidebar/people.png";
import cityIcon from "../../common/img/sidebar/city.png";
import analyticsIcon from "../../common/img/sidebar/analytics.png";
import settingsIcon from "../../common/img/sidebar/settings.png";

function Sidebar() {
  return (
    <nav className={s.sidebar}>
      <SidebarTab iconUrl={bookIcon} tabName="База знаний" pathname="/database" />
      <SidebarTab iconUrl={fileIcon} tabName="Заявки" pathname="/requests" />
      <SidebarTab iconUrl={peopleIcon} tabName="Сотрудники" pathname="/employees" />
      <SidebarTab iconUrl={cityIcon} tabName="Клиенты" pathname="/clients" />
      <SidebarTab iconUrl={analyticsIcon} tabName="Активы" pathname="/assets" />
      <SidebarTab iconUrl={settingsIcon} tabName="Настройки" pathname="/settings" />
    </nav>
  );
}

export default Sidebar;
