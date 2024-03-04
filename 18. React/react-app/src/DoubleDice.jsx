function DoubleDice() {
    const numberOne = Math.floor(Math.random() * 3) + 1;
    const numberTwo = Math.floor(Math.random() * 3) + 1;

    const isWinner = numberOne === numberTwo;

    const styles = {
        color: 'purple',
        backgroundColor: 'green',
        fontSize: '35px'
    };

    const colorStyles = {color: isWinner? 'green' : 'red'};

    return (
        <div className="DoubleDice" style={colorStyles}>
            <h2>Double Dice!</h2>
            {isWinner ? <h3>You win!</h3> : <h3>You lose!</h3>}
            <p>Number One: {numberOne}</p>
            <p>Number Two: {numberTwo}</p>
        </div>
    )
    
};



export default DoubleDice;