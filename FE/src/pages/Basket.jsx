import { useContext } from "react"
import { MainContext } from "./../context/MainProvider"
import { Link } from "react-router"


function Basket() {
    const { addBasket, basket, decreaseBasket,removeBasket,totalBasket } = useContext(MainContext)

    if (basket.length === 0) {
        return <p>hele hecne yoxdur</p>
    }
    return (
        <div className="container">
            <h1>Total:{totalBasket()}</h1>
            {
                basket.map(x => (
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
                            <div className="basket_count">
                                Count:{x.count}
                            </div>
                            <button onClick={() => addBasket(x) }>+</button>
                            <button onClick={() => decreaseBasket(x)}>-</button>
                            <button onClick={()=>removeBasket(x._id)}>Remove</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Basket