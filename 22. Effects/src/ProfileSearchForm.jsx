import { useState } from "react";

export default function ProfileSearchForm({ search }) {
    const [term, setTerm] = useState('');

    function handleChange(e) {
        setTerm(e.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();
        search(term);
        setTerm('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={term} onChange={handleChange} />
            <button>Search</button>
        </form>
    )

}