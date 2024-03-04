import './App.css'
import Chicken from './Chicken'
import Die from './Die'
import Greeter from './Greeter'

function App() {
    return (
        <div>
            {/* <Chicken /> */}
            <Greeter person="Bil" from="New York"/>
            <Greeter person="Jesicca"/>
            <Die numSides={20} />
        </div>
    )
}


export default App
