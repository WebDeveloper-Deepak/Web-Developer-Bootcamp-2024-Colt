import { useEffect } from "react";
import { useState } from "react";

export default function Counter() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    const increment = () => {
        setCount((c) => c + 1);
    };

    const handleChange = (e) => {
        setName(e.target.value)
    };

    useEffect(() => {
        console.log('effect called when count started');
    }, [count]);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+1</button>
            <p>Name: {name}</p>
            <input
                type="text"
                onChange={handleChange}
                value={name}
            />
        </div>
    );
};