import React from "react";
import TimeDisplay from "./TimeDisplay";
// import { HeaderCard } from "../styles";

type Props = {
  positionValue: (data: string) => void;
  positionSelected: string;
};

const Header = ({ positionValue, positionSelected }: Props) => {
  return (
    <React.Fragment>
      <div
        className="headerCard"
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around"
        }}
      >
        <ul className="text" style={{ alignSelf: "center", color: "white" }}>
          position
        </ul>
        <div style={{ display: "flex" }}>
          <input
            type="radio"
            name="radio1"
            value="Enabled"
            checked={positionSelected === "center" ? true : false}
            onChange={() => positionValue("center")}
          />
          <p style={{ alignSelf: "center", color: "white" }}>center</p>
        </div>
        <div style={{ display: "flex" }}>
          <input
            type="radio"
            name="radio1"
            value="Enabled"
            checked={positionSelected === "rightEnd" ? true : false}
            onChange={() => positionValue("rightEnd")}
          />
          <p style={{ alignSelf: "center", color: "white" }}>Right End</p>
        </div>
        <p style={{ alignSelf: "center", color: "white" }}>
          Press ESC key to hide the window, Enter to show it again
        </p>
        <p style={{ alignSelf: "center", color: "white" }}>
          <TimeDisplay />
        </p>
      </div>
    </React.Fragment>
  );
};

export default Header;
