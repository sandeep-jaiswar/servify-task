import React, { useContext } from "react";
import AppContext from "../../utils/AppContext";
import "./index.scss";

function Body() {
  const appdata = useContext(AppContext);
    return (
      <div className={`body-wrapper`}>
        <img src={appdata.logo} alt={`logo.png`} />
      </div>
    );
}

export default Body;
