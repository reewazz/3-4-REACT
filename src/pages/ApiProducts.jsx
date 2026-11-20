import React, { useEffect, useState } from 'react'

const ApiProducts = () => {

    const [count,setCount] = useState(0)
    

      const [age, setAge] = useState(15);

   



  useEffect(() => {
    if (age >= 18) {
    alert("You are an adult!");
    }
    console.log("useeffect is running")
  }, [age]);
 

    const makeAlert = ()=> {
        alert("hello ")
    }



  

  return (
    <div>
        <h1>Api Products</h1>

       <div className="flex p-20 gap-8 ">
         <button onClick={()=>setAge(age-1)} className='bg-blue-400 py-2 px-4 rounded-sm text-white font-semibold'>-</button>
        <h1 className='text-2xl '>{age}</h1>
        <button onClick={()=>setAge(age+1)} className='bg-blue-400 py-2 px-4 rounded-sm text-white font-semibold'>+</button>
        <button onClick={makeAlert} className='bg-blue-400 py-2 px-4 rounded-sm text-white font-semibold'>hello</button>
       </div>
    </div>
  )
}

export default ApiProducts