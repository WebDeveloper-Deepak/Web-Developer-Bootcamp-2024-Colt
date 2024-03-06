import ColorBox from "./ColorBox";
import './ColorBox.css'

function ColorBoxList({ colors }) {

    const boxes = [];

    for (let i = 0; i < 25; i++) {
        boxes.push(<ColorBox colors={colors}/>)
        
    }

    return (
        <div className="ColorBoxList">
            {boxes}
        </div>

    )
};

export default ColorBoxList;