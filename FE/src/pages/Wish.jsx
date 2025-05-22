import { useContext } from "react"
import {MainContext} from "./../context/MainProvider"
import {Link} from "react-router"

function Wish() {
    const {wish,addWish,removeWish,totalWish} = useContext(MainContext)


    if(wish.length===0){
        return <p>wishde hecne yoxdur</p>
    }
  return (
    <>
    <title>Wish</title>
    <h1>Total:{totalWish()}</h1>
    <div className="container">
        {
            wish.map(x=>(
                <div className="card" key={x._id}>
                    <div className="card_image">
                        <img src={x.image} alt="prod" />
                    </div>
                    <div className="card_title">
                        <div className="card_name">{x.name}</div>
                        <div className="card_price">{x.price}</div>
                        <Link to={`/detail/${x._id}`}>
                        <button>Info</button>
                        </Link>
                        <button onClick={()=>addBasket(x)}>Basket</button>
                        <button onClick={()=>removeWish(x._id)}>Remove</button>
                    </div>
                </div>
            ))
        }
    </div>
    </>
        
  )
}

export default Wish