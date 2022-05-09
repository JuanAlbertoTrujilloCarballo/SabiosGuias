import React, { useState } from "react"
import ElementPopper from "react-element-popper"
import { useNavigate } from "react-router-dom";
import "./MyDropdown.css"
import { infoRoutes } from "./infoRoutes";

export default function Dropdown() {
  const [state, setState] = useState({});

  const navigate = useNavigate();

  // const rutasDetail = [
  //   {
  //     number: list
  //   }
  // ]

  const list = (route) => (
    <ul className="dropdown">
      {route.stops.map((stop) => (
        <li key={stop.name} onClick={() => navigate(`/video-360/${route.id}/${stop.idStop}`)}>
          {stop.name}
        </li>
       
      ))}
    </ul>
  )

 

  const mainList = (
    <div className="dropdown">
      {infoRoutes.map((route, index) => (
        <div
          key={index}
          className="item"
          onMouseOver={() => setState({
            main: true,
            ["item" + index]: true
          })}
        >
          <ElementPopper
            containerStyle={{ width: "220px" }}
            element={(
              <>
                <span onClick={() => navigate(`/route-detail/${route.id - 1}`)}>Ruta {route.name}</span>
                <span style={{ float: "right" }}>{">"}</span>
              </>
            )}
            popper={state["item" + index] && list(route)}
            position="right-top"
          />
        </div>
      ))}
    </div>
  )

  return (
    <ElementPopper
      element={(
        <button className="dropdown-button"
          onClick={() => setState({ main: !state.main })}
        >
          Rutas
        </button>
      )}
      popper={state.main && mainList}
      position="bottom-left"
    />
  )
}