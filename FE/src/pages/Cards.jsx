import React, { useContext } from 'react'
import { MainContext } from '../context/MainProvider'
import {Link} from "react-router"
import "./style.css"

function Cards() {
    const {product,addBasket,addWish} = useContext(MainContext)
  return (
    <div className="container">
        {
            product.map(x=>(
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
                        <button onClick={()=>addWish(x)}>Wish</button>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Cards