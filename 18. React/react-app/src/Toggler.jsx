import { useState } from "react";
import './Toggler.css';

export default function Toggler({ }) {

    const [isHappy, setIsHappy] = useState(true);
    const [isSad, setIsSad] = useState(true);
    const [count, setCount] = useState(0);

    const toggleIsHappy = () => setIsHappy(!isHappy);
    const toggleIsSad = () => setIsSad(!isSad);
    const incrementCount = () => setCount(count + 2);

    return (
        <div>
            <button onClick={toggleIsHappy} className="Toggler">
                {isHappy ? '😀' : '😒'}
            </button>

            <button onClick={toggleIsSad} className="Toggler">
                {isSad ? '😥' : '🙂'}
            </button>

            <p>{count}</p>
            <button onClick={incrementCount}>+</button>
           
        </div>
    );
};
