import { useState } from "react"

function Counter () {
    
    // let [num,setNum] = useState(0)

    const [count,setCount] = useState(0) 

    const [user,setUser] = useState({
        name : "amosh",
        address : "balaju"
    }) //null


    // const show = true

    const [show,setShow] = useState(true)

  

    const [cars,setCars]  = useState(["bmw", "porshe","lambo"])
  



    let [name,setName] = useState("amosh")



    function reset () {
        setCount(0)
    }
 
  
function hideOut () {
    setShow(!show)

}


function five () {
    setCount(count+5)
}

    const increase = ()=> {
            setCount(count+1)
        
           
    console.log(count,"count ko value")

    }

    const color = 'yellow'

    return (
        <div className="flex justify-center p-20">
       <div className="flex gap-8 items-center">
         <button className="border border-gray-400 px-4 bg-red-400 text-white font-semibold">-</button>
        <h1>{count}</h1>
         <button onClick={increase} className="border border-gray-400 px-4 bg-green-400 text-white font-semibold">+</button>
         <button onClick={five} className="border border-gray-400 px-4 bg-green-400 text-white font-semibold">+5</button>
         <button onClick={reset} className="border border-gray-400 px-4 bg-yellow-400 text-white font-semibold">reset</button>
         <button onClick={hideOut}  className="border border-gray-400 px-4 bg-green-400 text-white font-semibold">
                {show ? "Hide" : "Show"}
        
         </button>

         <div style={{backgroundColor : color }} className=" h-20 w-20 rounded-full">

         </div>
         <button  className="border border-gray-400 px-4 bg-green-400 text-white font-semibold">red</button>
         <button  className="border border-gray-400 px-4 bg-green-400 text-white font-semibold">green</button>
         <button  className="border border-gray-400 px-4 bg-green-400 text-white font-semibold">yellow</button>



      

       </div>


            {show? <h1>I can be hidden </h1>: null}
        </div>
    )
}
export default Counter