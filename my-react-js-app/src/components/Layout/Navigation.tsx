import { Link } from "react-router-dom"



function Navigation () {
    return(
        <>
        <nav>
       <div className="nav-links" >
      <Link to="/" className="nav-link">Home </Link>
      <Link to="/Stats" className="nav-link">Stats </Link>
        </div>
</nav>
        </>
    )
}

export default Navigation