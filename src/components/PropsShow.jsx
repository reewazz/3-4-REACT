import { BookCard, EmployeeCard, MobileCard, MovieCard } from "./Cards";

const employees = [{
    name: "Aarav Sharma", position: "Frontend Developer",
    salary: 75000, department: "IT",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
},
{
    name: "Sita Gurung", position: "UI Designer", salary: 65000, department: "Design",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
},
{
    name: "Rohan Thapa", position: "Backend Developer", salary: 85000,
    department: "IT", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
},
{
    name: "Anisha Rai", position: "Project Manager", salary: 95000, department: "Management",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df"
}];
const books = [{
    title: "The Alchemist", author: "Paulo Coelho", price: 500, available: true,
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e"
},
{
    title: "Atomic Habits", author: "James Clear", price: 800, available: true,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794"
},
{
    title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", price: 650, available: false,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f"
},
{
    title: "The Psychology of Money", author: "Morgan Housel", price: 700, available: true,
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353"
}];
const mobiles = [{
    brand: "Apple", model: "iPhone 15", storage: "128GB", price: 999,
    image: "https://images.unsplash.com/photo-1592286927505-2fd0d1d3d6a0"
},
{
    brand: "Samsung", model: "Galaxy S24", storage: "256GB", price: 899,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c"
},
{
    brand: "Google", model: "Pixel 8", storage: "128GB", price: 699,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
},
{
    brand: "OnePlus", model: "12", storage: "256GB", price: 799,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97"
}];
const movies = [{
    title: "Inception", genre: "Sci-Fi", rating: 8.8, year: 2010,
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"
},
{
    title: "Interstellar", genre: "Sci-Fi", rating: 8.7, year: 2014,
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1"
},
{
    title: "The Dark Knight", genre: "Action", rating: 9.0, year: 2008,
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728"
},
{
    title: "Avatar", genre: "Adventure", rating: 7.8, year: 2009,
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1"
}];
const title = "kdhcvshgvf"

// const {title} = movie    ///movie.title   

// const movie = {
//     title,   //title: title,
//     age :23
// }





function PropsShow() {
    return (<div> <h1>Employee Details</h1>
        <div className="card-container"> 
            {employees.map((item) =>(<EmployeeCard key={item.name} {...item} />))}
        </div>
        <h1>Book Details</h1>
        <div className="card-container">
            {books.map((book) => (<BookCard key={book.title} {...book} />))}
        </div>
        <h1>Mobile Details</h1>
        <div className="card-container"> 
            {mobiles.map((mobile) =>(<MobileCard key={mobile.brand + "-" + mobile.model} {...mobile} />))}
        </div>
        <h1>Movie Details</h1>
        <div className="card-container">
             {movies.map((movie) =>(<MovieCard key={movie.title} {...movie} />))} </div>
    </div>
    );
}
export default PropsShow;