import { useContext } from "react"
import { Link } from "react-router"
import { MainContext } from "../context/MainProvider"
function Navbar() {
  const { basket,wish } = useContext(MainContext)
  return (
    <header>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/adminadd">Admin Add</Link>
          </li>
          <li>
            <Link to="/basket">Basket</Link> {basket.length}
          </li>
          <li>
            <Link to="/wish">Wish</Link>  
            {wish.length}
          </li>
        </ul>
      </nav>
    </header>

  )
}

export default Navbar