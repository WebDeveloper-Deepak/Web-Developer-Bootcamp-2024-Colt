function PropertyListItems({ id, name, rating, price }) {

    const style = { display: 'flex', justifyContent: 'center'}

    return (
        <div
            style={style}
            key={id}>
            {name}
            {rating}
            {price}
        </div>
    )
};


export default PropertyListItems;