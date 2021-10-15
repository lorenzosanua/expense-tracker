import React from "react";
import { BudgetEntryValueDisplay } from "./BudgetEntryValueDisplay";

export function BudgetEntry(props){
    
    
    return(
        <div className="BudgetEntry">
            <BudgetEntryValueDisplay value="props.entryValue"/>
            {props.entryText}
        </div>
    );
}