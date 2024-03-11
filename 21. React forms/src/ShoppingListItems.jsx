import { useState } from "react"
import { v4 as uuid } from 'uuid';

import ShoppingList from "./ShoppingList";

export default function ShoppingListItems() {

    const [items, setItems] = useState([
        { id: uuid(), product: 'bananas', qty: 12 },
        { id: uuid(), product: 'strawberries', qty: 8 },
    ]);

    const addItem = (item) => {


        setItems((currentItem) => {
            return [...currentItem, { ...item, id: uuid() }]
        })
    };

    return (
        <div>
            <h1>Shopping list</h1>

            <ul>
                {items.map((i) => (
                    <li key={i.id}>
                        {i.product} - {i.qty}
                    </li>))}
            </ul>
            <ShoppingList addItem={addItem} />
        </div>
    )
};