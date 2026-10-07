function ProductCard({item}){
    return (
        <>
         <div className="card">
            <img src={item.image} />
            <h1>{item.name}</h1>
            <h3>${item.price}</h3>
            <p>{item.category}</p>
            <p>Stock: {item.stock}</p>
            <p>Rating: {item.rating}</p>
           </div>
        </>
    )
}

export default ProductCard