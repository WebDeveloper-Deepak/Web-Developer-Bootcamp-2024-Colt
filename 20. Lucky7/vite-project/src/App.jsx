import './App.css'
import Box from './Box'
import BoxGrid from './BoxGrid'
import Dice from './Dice'
import Die from './Die'
import Lucky7 from './Lucky7'
import LuckyN from './LuckyN'
import { sum } from './utils'


function lessThan4(dice) {
    return sum(dice) < 4;
};

function allSameValue(dice) {
  return dice.every((v) => v === dice[0]);
};

function App() {

  return (
    <div>
      {/* // <Lucky7 /> */}
      {/* <Die val={2} />
      <Die val={3} /> */}
      {/* <LuckyN winCheck={lessThan4} title='Roll less than 4'/>
      <LuckyN winCheck={allSameValue} title='Roll the same number'/> */}

      <BoxGrid />
    </div>
  )
}

export default App
