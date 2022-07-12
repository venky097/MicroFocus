import * as React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

type Props = {
  enable: any;
  positionSelected: string;
  onDrag: any;
};

export const FloatingWindow = ({ enable, onDrag, positionSelected }: Props) => {
  const constraintsRef = useRef(null);

  return (
    <>
      <motion.div className="drag-area" ref={constraintsRef} />
      {enable ? (
        <motion.div
          drag={true}
          onDrag={onDrag}
          dragConstraints={constraintsRef}
        >
          <p style={{ textAlign: "center" }}>
            {positionSelected === "center" ? "Center" : "Right End"}
          </p>
        </motion.div>
      ) : null}
    </>
  );
};
