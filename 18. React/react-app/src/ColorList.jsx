function ColorList({ colors }) {
    return (
        <div>
            <p>Color list:</p>
            <ul>
                {colors.map((c) => (
                    <li style={{ color: c }}>{c}</li>
                ))}
            </ul>
        </div>
    )
};

export default ColorList;