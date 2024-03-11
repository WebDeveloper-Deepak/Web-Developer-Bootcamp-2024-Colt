import { useState } from "react"

export default function BetterSignUp() {

    const [formData, setFormData] = useState({ firstName: '', lastName: '', password: '' })

    const handleChange = (e) => {
        const changedField = e.target.name;
        const newValue = e.target.value;

        setFormData(currentData => {
            return {
                ...currentData,
                [changedField]: newValue,
            };
        });

        console.log(changedField, newValue);

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <div>
            <form>
                <label htmlFor="firstname">Enter a firstname</label>
                <input
                    type="text"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    name="firstName"
                    id="firstname"
                />

                <input
                    type="text"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    name="lastName"
                    id="lastname"
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    name="password"
                    id="password"
                />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
};
