import App2 from "./App2";
import "./Style.css"
import Button from "./components/Button";
import CardShop from "./components/CardShop";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { products } from "./components/Products";
import UserCard from "./components/UserCard";




function App() {
 

const users = [
{
  name : "aron angdembe",
  age : 23,
  address : "sankhamul",
  isMarried : false
},
{
    name : "amosh shrestha",
  age : 18,
  address : "balaju",
  isMarried : false
},
{
    name : "roshan khan",
  age : 23,
  address : "kalanki",
  isMarried : false
},
{
    name : "manish giri",
  age : 19,
  address : "jhapa",
  isMarried : false
}

]



const numbers = [1,2,3,44,55,66,77]

const userbelow20 = users.filter((item,index)=>item.age<20)

  return (
    <>
  <Navbar/>

  {/* <h1 style={{textAlign: "center"}}  >All Users</h1>

  <div className="cards">

        {users.map((item,index)=>{
               return    <UserCard name = {item.name} age= {item.age} address= {item.address}/>
        })}


       
   
       
  </div>

  <h1 style={{textAlign: "center"}}  >Below 20</h1>


{userbelow20.map((item,index)=>(
                   <UserCard name = {item.name} age= {item.age} address= {item.address}/>
))} */}


  <div className="cardsss">
    {products.map((item,index)=>(
 <ProductCard item = {item}/>
  ))}
  </div>
        

        
       
    <Footer/>
    </>
  );
}

export default App;
