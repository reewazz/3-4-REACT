import { Link } from "react-router-dom"
import Button from "./Button"

function Navbar() {
    return (
        <>
     <nav className="navbar flex gap-6 justify-between  bg-black text-white text-[24px] font-semibold px-20 py-8">
        <h1 className="">Athena</h1>
        <div className="nav-items flex gap-4">
            <Link to="/">Home</Link>
            <Link to="athena">Athena</Link>
            <Link to={"services"}>Services</Link>
            <Link to = "jpt" >Jpt</Link>
            <div>Products</div>

           
        </div>
    </nav>
    </>
    )

  
}

export default Navbar