import { useState } from "react";
import {v4 as uuid} from 'uuid';

function randomEmoji() {
    const choices = [
        '😀',
        '😏',
        '🥶',
        '🤑'
    ];

    return choices[Math.floor(Math.random() * choices.length)]
}

export default function EmojiClicker() {

    const [emojis, setEmojis] = useState([{id: uuid(), emoji: randomEmoji()}]);

    const addEmoji = () => {
        setEmojis((oldIcons) => [...oldIcons, {id: uuid(), emoji: randomEmoji()}]);
    };

    const deleteEmoji = (id) => {
        setEmojis(prevEmojis => {
            return prevEmojis.filter(e => e.id !== id);
        })
    };

    const moneyEmoji = () => {
        setEmojis(prevEmojis => {
            return prevEmojis.map(e => {
                return {...e, emoji: '🤑'}
            });
        });
    };

    return (
        <div>

            {emojis.map((e) => (
                <span 
                onClick={() => deleteEmoji(e.id)}
                key={e.id} 
                style={{ fontSize: '4em' }}>{e.emoji}</span>
            ))}

            <button onClick={addEmoji} className="">Add emoji</button>
            <button onClick={moneyEmoji} className="">Make them money</button>
        </div>
    );
};