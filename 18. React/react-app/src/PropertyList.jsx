import PropertyListItems from "./PropertyListItems";

function PropertyList({ properties }) {

    return (
        <div>
            {properties.map((p) => (
                 <PropertyListItems
                    key={p.id}
                    name={p.name}
                    rating={p.rating}
                    price={p.price}
                 />
            ))}
        </div>

    )

};

export default PropertyList;