import React, {useState} from "react";

export function BudgetEntryInput(props){
    const [value, setValue] = useState(0);
    const [text, setText ] = useState('');

    return(
        <div >
            <input type="number" value="importo"></input>
            <input type="text" id=" "></input>
        </div>
    );
}