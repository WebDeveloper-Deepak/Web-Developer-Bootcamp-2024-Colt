function handleFormSubmit (e) {
    e.preventDefault();
    console.log('Submitted');
}

export default function Form () {
    return (
        <form onSubmit={handleFormSubmit}>
            <button>Submit</button>
        </form>
    )
};