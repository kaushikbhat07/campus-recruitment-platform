import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="App">
            <p>Home</p>
            <Link to="/about">About</Link>
        </div>
    );
}

export default HomePage;
