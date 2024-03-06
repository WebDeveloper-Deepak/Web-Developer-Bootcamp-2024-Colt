import { useState } from 'react'
import './ColorBox.css'

function randomChoice(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
};

function ColorBox({ colors }) {

    const [color, setColor] = useState(randomChoice(colors));

    const changeColor = () => {
        const randomColor = randomChoice(colors);
        setColor(randomColor)
    }

    return (
        <div
            className="Box"
            onClick={changeColor}
            style={{ backgroundColor: color }}>
        </div>
    )
};

export default ColorBox;
