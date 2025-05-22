import { Link } from "react-router"
function Navbar() {
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
        </ul>
      </nav>
    </header>

  )
}

export default Navbar