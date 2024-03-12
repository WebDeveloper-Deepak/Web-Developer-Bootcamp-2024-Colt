import Rating from '@mui/material/Rating';
import { useState } from 'react'

export default function RatingDemo() {
    
    const [score, setScore] = useState(5)
    
    return (
        <div>
            <h1>Rating</h1>
            <h2>Current rating: {score}</h2>
            <Rating
                name="simple-controlled"
                value={score}
                onChange={(e, newValue) => {
                    setScore(newValue)
                }}
            />
        </div>
    )
};