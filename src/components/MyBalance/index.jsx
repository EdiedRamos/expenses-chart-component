import React from "react";

import "./styles.scss";

import logo from "../../assets/logo.svg";

const MyBalance = () => {
  return (
    <div className="my-balance-container">
      <div>
        <p>My balance</p>
        <p id="balance">$921.48</p>
      </div>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default MyBalance;
