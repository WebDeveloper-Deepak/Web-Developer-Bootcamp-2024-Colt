import { useState } from "react"

function handleClick() {
    alert('Clicked')
};

function onMouseHover() {
    alert('Hovered')
}

export default function Clicker({ message, buttonText }) {

    function alertMessage() {
        alert(message)
    }

    return (
        // <div>
        //     <p>Click the button</p>
        //     <button onClick={handleClick}>Click here</button>
        //     <button onMouseOver={onMouseHover}>Hover here</button>
        // </div>

        <div>
            <button onClick={alertMessage}>
                {buttonText}
            </button>
        </div>
    )
};