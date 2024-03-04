import './App.css'
import Chicken from './Chicken'
import Die from './Die'
import DoubleDice from './DoubleDice'
import Greeter from './Greeter'
import Heading from './Heading'
import ListPicker from './ListPicker'
import ColorList from './ColorList'

function App() {
    return (
        <div>
            <Heading color='magenta' text={'Hi magenta'} fontSize={'20px'}/>
            <Heading color='teal' text={'Hi teal'} fontSize={'25px'}/>
            {/* <Chicken /> */}
            {/* <Greeter person="Bil" from="New York"/>
            <Greeter person="Jesicca"/>
            <Die numSides={20} /> */}

            {/* <ListPicker values={[1, 2, 3]} />
            <ListPicker values={['a', 'b', 'c']} /> */}

            <DoubleDice />

            <ColorList colors={["red", "pink", "purple", "teal"]}/>
            
        </div>
    )
}


export default App;
