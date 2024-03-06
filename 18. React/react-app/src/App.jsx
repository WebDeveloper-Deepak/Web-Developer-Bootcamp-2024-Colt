import './App.css'
import Chicken from './Chicken'
import Die from './Die'
import DoubleDice from './DoubleDice'
import Greeter from './Greeter'
import Heading from './Heading'
import ListPicker from './ListPicker'
import ColorList from './ColorList'
import ShoppingList from './ShoppingList'
import PropertyList from './PropertyList'
import Clicker from './Clicker'
import Form from './Form'
import Counter from './Counter'
import Toggler from './Toggler'
import ColorBox from './ColorBox'
import ColorBoxList from './ColorBoxList'

const data = [
    { id: 1, item: 'egg', quantity: 12, completed: false },
    { id: 2, item: 'milk', quantity: 8, completed: true },
    { id: 3, item: 'chicken', quantity: 4, completed: false },
    { id: 4, item: 'yoghurt', quantity: 6, completed: true },
    { id: 5, item: 'lettuce', quantity: 10, completed: false },
];

const properties = [
    {id: 129031, name: 'Desert Yurt', rating: 4.9, price: 150},
    {id: 129032, name: 'Lone Mountain Cabin', rating: 4.8, price: 250},
    {id: 129033, name: 'Cactus Retreat', rating: 4.75, price: 300},
    {id: 129034, name: 'Redwood Tree House', rating: 4.9, price: 120},
    {id: 129035, name: 'Gold miner Campground Yurt', rating: 4.69, price: 96},
];

const colors = 
    [
        '#B8D5F0', 
        '#9C92F3',
        '#D5535D',
        '#B0F53D',
        '#680F7F',
        '#57A04A',
        '#A04607',
        '#7CE788',
        '#DDD818',
        '#1D6DAF',
        '#DED092'
    ];

function App() {
    return (
        <div>
            {/* <Heading color='magenta' text={'Hi magenta'} fontSize={'20px'}/>
            <Heading color='teal' text={'Hi teal'} fontSize={'25px'}/> */}
            {/* <Chicken /> */}
            {/* <Greeter person="Bil" from="New York"/>
            <Greeter person="Jesicca"/>
            <Die numSides={20} /> */}

            {/* <ListPicker values={[1, 2, 3]} />
            <ListPicker values={['a', 'b', 'c']} /> */}
            {/* 
            <DoubleDice />

            <ColorList colors={["red", "pink", "purple", "teal"]}/> */}

            {/* <ShoppingList items={data}/> */}

            {/* <PropertyList properties={properties}/> */}
            {/* <Clicker message='Hello!' buttonText="Please click me" /> */}
            {/* <Form /> */}
            {/* <Counter /> */}
            {/* <Toggler /> */}
            <ColorBoxList colors={colors} />

        </div>
    )
}


export default App;
