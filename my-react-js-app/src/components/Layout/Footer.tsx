import Navigation from "./Navigation"

function Footer () {
    return(
        <>
        <footer className="footer">
        <p>Diamond Data Stats</p>

        <p>Quick Links</p>
        <div className="navFoot">
        <Navigation/>
        </div>
    

      <p className="footer-copy">&copy; {new Date().getFullYear()} 
        Diamond Data LLC. <br></br>
        Created by Dwayne Burn and Frank Spitzock. <br></br>
        All rights reserved.</p>
        </footer>
    </>
    )
}

export default Footer