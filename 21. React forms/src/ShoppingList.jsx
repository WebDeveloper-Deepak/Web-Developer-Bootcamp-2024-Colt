import { useState } from "react";

export default function ShoppingList({ addItem }) {

    const [formData, setFormData] = useState({
        product: '',
        qty: 0,
    });

    //*Commented side if for custom validation
    // const [productIsValid, setProductIsValid] = useState(false);

    // const validate = () => {
    //     if (formData.product.length === 0) {
    //         setProductIsValid(false);
    //     } else {
    //         setProductIsValid(true);
    //     };
    // };

    const handleChange = (e) => {

        // if (e.target.name === 'product') {
        //     validate(e.target.value)
        // }

        setFormData(currData => {
            return {
                ...currData,
                [e.target.name]: e.target.value
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // if (productIsValid) {
        //     addItem(formData);
        //     setFormData({ product: '', qty: 0 })     
        // };

        addItem(formData);
        setFormData({ product: '', qty: 0 })

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="product">Product name</label>
                <input
                    type="text"
                    placeholder="Product name"
                    name="product"
                    id="product"
                    onChange={handleChange}
                    value={formData.product}
                />

                {/* {!productIsValid && <p style={{ color: 'red' }}>Product cannot be empty</p>} */}

                <label htmlFor="qty">Quantity</label>
                <input
                    type="text"
                    placeholder="1"
                    name="qty"
                    id="qty"
                    onChange={handleChange}
                    value={formData.qty}
                />

                <button>Submit</button>
            </form>
        </div>
    )
};