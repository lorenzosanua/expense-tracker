import React, { useState } from "react";
import { BudgetEntryInput } from "./BudgetEntryInput";
import { BudgetEntry } from "./BudgetEntry";

function BudgetGroup() {
  const entryList = new Array();

  const addEntry = (value, text, e) => {
    if (e.key === "enter")
      entryList.push(<BudgetEntry value={value} text={text} />);
  };

  return (
    <div className="BudgetGroup">
      <BudgetEntryInput onKeyDown={(value, text, e) => addEntry(value,text,e)} />
      <div>{entryList}</div>
    </div>
  );
}
