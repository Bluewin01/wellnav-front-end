import React, { useState } from "react";
import "./CollapseSideBar.css";

const CollapseSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul className="sidebar-menu">
          <li>
            <a href="#home">Dashboard</a>
          </li>
          <li>
            <a href="#services">Rekomendasi Makanan</a>
          </li>
          <li>
            <a href="#about">Pelacakan Nutrisi</a>
          </li>
          <li>
            <a href="#contact">Pelacakan Air Putih</a>
          </li>
          <li>
            <a href="#contact">Notifikasi dan Pengingat</a>
          </li>
          <li>
            <a href="#contact">Keluar</a>
          </li>
        </ul>
      </div>
      <div className="hamburger-menu" onClick={toggleSidebar}>
        <i className="bi bi-list"></i>
      </div>
      <div
        className={`overlay ${isOpen ? "show" : ""}`}
        onClick={toggleSidebar}
      ></div>
    </>
  );
};

export default CollapseSidebar;
