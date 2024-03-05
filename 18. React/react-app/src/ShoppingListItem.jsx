function ShoppingListItem({ id, item, quantity, completed }) {
    const style = {
        color: completed ? 'green' : 'red',
        textDecoration: completed ? 'line-through' : 'none'
    }
    return (
        <li
            key={id}
            style={ style }>
            {item} - {quantity}
        </li>
    )
};

export default ShoppingListItem;