import React from "react";
import "./Cell.css";


export const Cell = ({ flipCellsAroundMe, isLit }) => {

  const classes = `Cell ${isLit ? "Cell-lit" : ""}`;
  return <td className={classes} onClick={flipCellsAroundMe} role="button" />;
}
