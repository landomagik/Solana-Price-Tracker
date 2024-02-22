import solanaLogo from "./assets/solana-logo.jpg"
import SolanaPriceTracker from "./SolanaPriceTracker.jsx"

//Create container component to house the data for the application

function Container() {
    return (
        <div className="container">
            <h1 className="container-title">Solana Price Tracker</h1>
            <img className="solana-logo" src={solanaLogo} alt="Solana Logo" />
            <h2 className="price-text">The current price of Solana is:</h2>
            <SolanaPriceTracker />
            <footer className="footer">&copy; {new Date().getFullYear()} Landomagik Web Design</footer>


        </div>
    )
}

export default Container