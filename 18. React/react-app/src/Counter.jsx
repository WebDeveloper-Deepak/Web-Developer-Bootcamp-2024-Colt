import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0);

    function setNum() {
        setCount(count + 1)
    };

    return (
        <div>
            <p>The count is: {count}</p>
            <button onClick={setNum}>Increment</button>
        </div>
    )
};


// * This returns an array containing two elements: 
// *  - The piece of state itself
// *  - A function to change the piece of state
// * The useState is called inside the component

