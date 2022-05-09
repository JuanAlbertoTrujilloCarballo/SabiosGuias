import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Dropdown from './MyDropdown';

import "./MyHeader.css";

export default function MyHeader() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/all-routes");
  }

  return (
    <>
      <header className="header-container">
        <img src="/img/LogoSabiosGuias-Inverso.png" alt="Sabios Guías Intérpretes" />
        <div>
          <span onClick={handleClick} className="pointer-allRoutes">All Routes</span>
        </div>
        <div>
          <Dropdown/>
        </div>
      </header>
    </>


  );
}