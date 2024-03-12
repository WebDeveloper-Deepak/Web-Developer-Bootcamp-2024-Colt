import './App.css'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import AlarmIcon from '@mui/icons-material/Alarm'
import RatingDemo from './Rating'
import FormDemo from './FormDemo'
import ButtonAppBar from './ButtonAppBar'
function App() {

    return (
        <div>
            <ButtonAppBar />

            {/* <Button variant="contained" onClick={() => alert('HI')}>Contained</Button>
            <Button variant="text">Contained</Button>
            <Button variant="outlined">Contained</Button>

            <IconButton color="secondary" aria-label="add alarm">
                <AlarmIcon />
            </IconButton> */}

            {/* <RatingDemo /> */}
            <FormDemo />
        </div>
    )
}

export default App
