import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import About from "./About";
import PageNotFound from "./PageNotFound";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/about" component={About} />
				<Route component={PageNotFound} />
			</Switch>
		</div>
	);
}

export default App;