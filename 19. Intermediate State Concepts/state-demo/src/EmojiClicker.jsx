import { useState } from "react";
import {v4 as uuid} from 'uuid';

export default function EmojiClicker() {

    const [emojis, setEmojis] = useState([{id: uuid(), emoji: '🤑'}]);

    const addEmoji = () => {
        setEmojis((oldIcons) => [...oldIcons, {id: uuid(), emoji: '🥶'}]);
    };

    const emojiIcons = [
        '😀',
        '😏',
        '🥶',
        '🤑'
    ]

    return (
        <div>

            {emojis.map((e) => (
                <span key={e.id} style={{ fontSize: '4em' }}>{e.emoji}</span>
            ))}

            <button onClick={addEmoji} className="">Add emoji</button>
        </div>
    );
};