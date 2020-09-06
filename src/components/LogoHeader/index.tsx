import React from "react";

import Logo from "../../images/logo.svg";

import "./style.css";

export default function LogoHeader() {
  return (
    <div className="logo-header">
      <img src={Logo} alt="Логотип" className="logo-header__logo" />
    </div>
  );
}
