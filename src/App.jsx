import { Route, Routes } from "react-router-dom";
import App2 from "./App2";
import "./Style.css";
import Athena from "./components/Athena";
import Button from "./components/Button";
import CardShop from "./components/CardShop";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { products } from "./components/Products";
import PropsShow from "./components/PropsShow";
import UserCard from "./components/UserCard";
import Netflix from "./pages/Netflix";

function App() {
  const users = [
    {
      name: "aron angdembe",
      age: 23,
      address: "sankhamul",
      isMarried: false,
    },
    {
      name: "amosh shrestha",
      age: 18,
      address: "balaju",
      isMarried: false,
    },
    {
      name: "roshan khan",
      age: 23,
      address: "kalanki",
      isMarried: false,
    },
    {
      name: "manish giri",
      age: 19,
      address: "jhapa",
      isMarried: false,
    },
  ];

  const cars = {
    brand: "bmw",
  };

  const { brand } = cars;

  const numbers = [1, 2, 3, 44, 55, 66, 77];

  const userbelow20 = users.filter((item, index) => item.age < 20);
  const abc = numbers.map((item, index) => item);

  return (
    <>
      {/* <Navbar /> */}



      <Routes>
        <Route index element={<HomePage />} />
        <Route path="athena" element={<Athena />} />
        <Route path="cards" element={<PropsShow />} />
        <Route path="services" element={<Athena />} />
        <Route path="netflix" element={<Netflix />} />
        {/* <Route path="jpt" element={<h1>Jpt ko page</h1>} /> */}
        <Route path="*" element= {<h1>Page not found</h1>}/>
      </Routes>
      {/* <Footer /> */}


      {/* {
    id: 4,
    name: "Cotton T-Shirt",
    price: 19.99,
    category: "Clothing",
    stock: 50,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  }, */}

      {/* <div className="cardsss">
    {products.map((item,index)=>(
 <ProductCard item = {item}/>
  ))}
  </div> */}


    </>
  );
}

export default App;
