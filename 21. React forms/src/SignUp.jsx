import { useState } from "react"

export default function SignUp() {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    const updateFirstname = (e) => {
        console.log(e.target.value);
        setFirstname(e.target.value)
    };

    const updateLastname = (e) => {
        console.log(e.target.value);
        setLastname(e.target.value)
    };

    const handleSubmit = (e) => {
        console.log(firstname, lastname);
    };

    return (
        <div>
            <form>
                <label htmlFor="firstname">Enter a firstname</label>
                <input
                    type="text"
                    placeholder="First name"
                    value={firstname}
                    onChange={updateFirstname}
                    id="firstname"
                />

                <input
                    type="text"
                    placeholder="Last name"
                    value={lastname}
                    onChange={updateLastname}
                    id="lastname"
                />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
};
