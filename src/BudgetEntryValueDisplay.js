import React from "react";

export function BudgetEntryValueDisplay(props) {
  return (
    <div
      style={
        props.value > 0
          ? { backgroundColor: "green" }
          : { backgrondColor: "red" }
      }
      className="BudgetEntryValueDisplay"
    >
      {props.value >= 0 ? "+" : "-"}
      {props.value}
    </div>
  );
}
