// import logo from "./logo.svg";
import { Route } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import About from "./About";

function App() {
	return (
		<div className="App">
			{/* <header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Hey this works
				</a>
			</header> */}
			<Route exact path="/" component={HomePage} />
			<Route path="/about" component={About} />
		</div>
	);
}

export default App;