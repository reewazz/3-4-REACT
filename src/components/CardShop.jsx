function CardShop(UserValue){    // this is the arguments as props which is immutable 


    return(
        <>
        <div className = 'cardContainer'>
            <div className="card">
                <img src={UserValue.img} alt="travel"/>
                 <div className="content">
                    <p>{UserValue.content} </p>


                    <h3>{UserValue.title}</h3>
                    
                    <p>{UserValue.description}</p>
        
                </div>
                <hr/>
                <h4>Card Link</h4>
        
        <div className="circle">
            <img src={UserValue.profile} alt="travel"/>
            <h5>{UserValue.name}</h5>


        </div>      
        </div>
        </div>
    </>
    )
}
export default CardShop