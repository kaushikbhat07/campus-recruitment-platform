import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import About from "./About";
import PageNotFound from "./PageNotFound";
import TopNavbarComponent from './Components/TopNavbarComponent';
import Container from "react-bootstrap/Container";
import BottomNavbarComponent from './Components/BottomNavbarComponent';

function App() {
	return (
		<div className="App">
			<TopNavbarComponent />
			<Container fluid>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/about" component={About} />
					<Route component={PageNotFound} />
				</Switch>
				<div id="content-box-main">
					Et sit amet aliqua consectetur commodo labore fugiat deserunt. Consequat nisi eiusmod ullamco velit ea. Irure pariatur ea dolor ipsum nulla eiusmod sunt. Ullamco deserunt cupidatat aliquip commodo aliquip magna proident proident adipisicing eu anim. Sunt velit duis eiusmod adipisicing. Incididunt adipisicing do consequat ut exercitation deserunt aute. Eu deserunt id culpa do sint enim est fugiat irure occaecat mollit ad.
				</div>
			</Container>
			<BottomNavbarComponent />
		</div>
	);
}

export default App;