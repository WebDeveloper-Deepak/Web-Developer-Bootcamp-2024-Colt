function Heading({ color = 'purple', text, fontSize }) {
    return (
        <h1 style={{ color: color, fontSize: fontSize }}>{text}</h1>
    )
};

export default Heading;