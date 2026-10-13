// d
function EmployeeCard({ name, position, salary, department, image }) {
    return (<div className="card"> <img src={image} alt={name} />
        <h2>{name}</h2> <p>Position: {position}</p> <p>Salary: Rs. {salary}</p>
        <p>Department: {department}</p> </div>);
}
// wd
function BookCard(props) {
    return (<div className="card"> <img src={props.image} alt={props.title} />
        <h2>{props.title}</h2> <p>Author: {props.author}</p> <p>Price: Rs. {props.price}</p>
        <p>Available: {props.available ? "Yes" : "No"}</p> </div>);
}
// d
function MobileCard({ brand, model, storage, price, image }) {
    return (<div className="card"> <img src={image} alt={brand + " " + model} />
        <h2>{brand} {model}</h2> <p>Storage: {storage}</p>
        <p>Price: ${price}</p> </div>);
}
// wd
function MovieCard(props) {
    return (
    <div className="card"> <img src={props.image} alt={props.title} />
        <h2>{props.title}</h2> <p>Genre: {props.genre}</p> <p>Rating: {props.rating}</p>
        <p>Year: {props.year}</p> </div>
        )}


        export {MovieCard,MobileCard,BookCard,EmployeeCard}