import './App.css'
import Counter from './Counter';
import Dumbo from './Dumbo';
import EmojiClicker from './EmojiClicker';
import ScoreKeeper from './ScoreKeeper';

function App() {

    return (
        <div>
            <h1>State demo</h1>
            {/* <Counter /> */}
            {/* <Dumbo /> */}
            <ScoreKeeper numPlayers={10} target={3}/>
            {/* <EmojiClicker /> */}
        </div>
    )
}

export default App;
