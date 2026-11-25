import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
     <nav className="navbar flex gap-6 justify-between  bg-black text-white text-[24px] font-semibold px-20 py-8">
        <h1 className="">Athena</h1>
      
        <div className="nav-items flex gap-4">
            <Link className="text-xl" to="/">Home</Link>
            <Link className="text-xl" to="athena">Athena</Link>
            <Link className="text-xl" to={"services"}>Services</Link>
            <Link className="text-xl" to = "blogs" >Blogs</Link>
            <Link className="text-xl" to = "news" >News</Link>

           
        </div>
    </nav>
    </>
    )

  
}

export default Navbar