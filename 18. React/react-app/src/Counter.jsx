import { useState } from "react"

export default function Counter({ num }) {

    const [counter, setCounter] = useState(0);

    const increment = () => {
        num += 1;
    }

    return (
        <div>
            <p>The count is: {num}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
};
