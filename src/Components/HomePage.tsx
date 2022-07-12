import * as React from "react";
import { useState } from "react";
import { FloatingWindow } from "../Common/FloatingWindow";
import Footer from "../Common/Footer";
import Header from "../Common/Header";

import "../styles.css";

const homePage = () => {
  const [enable, setEnable] = useState<boolean>(false);
  const [positionSelected, setPositionSelected] = useState<
    "center" | "rightEnd" | ""
  >("center");

  const [prevPositionSelected, setPrevPositionSelected] = useState<
    "center" | "rightEnd"
  >("center");

  const getPosition = (data) => {
    setEnable(false);
    setPositionSelected(data);
    setPrevPositionSelected(data);
  };

  React.useEffect(() => {
    setEnable(true);
  }, [positionSelected]);

  const handleOnClickDrag = () => {};

  React.useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        setEnable(true);
        event.preventDefault();
        // callMyFunction();
      }
      if (event.code === "Escape" || event.code === "13") {
        setEnable(false);
        event.preventDefault();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  const handleKeyPress = (event) => {
    console.log("", event.key, event.keyCode);
    if (event.key === "Enter") {
      console.log("enter press here! ");
    }
    if (event.key === "Escape") {
      setEnable(false);
    }
  };

  const onDrag = (data: any) => {
    setPositionSelected("");
  };

  return (
    <>
      <div>
        <Header
          positionValue={(data) => {
            getPosition(data);
          }}
          positionSelected={positionSelected}
        />
        <div
          className={
            prevPositionSelected === "rightEnd"
              ? `floating-container2`
              : `floating-container`
          }
        >
          <FloatingWindow
            positionSelected={positionSelected}
            enable={enable}
            onDrag={onDrag}
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default homePage;
// render(<home />, document.getElementById("root"));
