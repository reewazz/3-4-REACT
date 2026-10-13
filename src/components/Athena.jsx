import heroImage from "../assets/athena/temple2.png"

function Athena(){


    return (
        <>
        

    <div className='herosection flex justify-between h-screen items-center'> 
        <div className=" flex flex-col gap-8 w-[40%]">
            <h1>Some Catchy Line</h1>
            <h3>Line to support the catchy line</h3>
            <p>Lorem ipsum dolor sit amet consectetur,</p>
            <button>Get Started</button>
    </div>
    <div className="imagearea">
            <img src= {heroImage}/>
    </div>
    </div> 
    <div className="screen"></div>
    </>
    )
}
export default Athena