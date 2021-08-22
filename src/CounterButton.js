import { useState } from "react";

const CounterButton = (props) => {

    const [state, setState] = useState(0);

    function increment() {

            setState(state + 1 );

    }
    
    return(
        <button onClick={increment} className="btn btn-dark">{state}</button>
    )
}

export default CounterButton;