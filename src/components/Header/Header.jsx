import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header grid_item">
      <div className="topHeader">
        <img
          src="https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/29/c6/a6/29c6a6d1-3d6b-afb0-85ce-bef0e8505639/source/512x512bb.png"
          alt="logo"
        />
      </div>
      <div className="titleHeader">
        <h1>TO DO List</h1>
      </div>
    </header>
  );
};

export default Header;
