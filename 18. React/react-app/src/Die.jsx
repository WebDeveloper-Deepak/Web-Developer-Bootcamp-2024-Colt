export default function Die({ numSides }) {
    const roll = Math.floor(Math.random() * numSides) + 1;

    return (
        <div>
            <p>Die roll: {roll}</p>
            <p>Check roll: {numSides}</p>
        </div>
    )
}