import '../styles/Navbar.css'

function Navbar(){
    return(
    <nav className="navbar">
        <h1 className="logo">Web Scraper</h1>
        <ul className="nav-links">
          <li className="nav-link Home"><a href="#">Home</a></li>
          <li className="nav-link About"><a href="#">About</a></li>
        </ul>
      </nav>
      )
}

export default Navbar;