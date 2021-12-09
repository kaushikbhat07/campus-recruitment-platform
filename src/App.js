import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import About from "./About";
import PageNotFound from "./PageNotFound";
import TopNavbarComponent from './Components/TopNavbarComponent';
import Container from "react-bootstrap/Container";
import BottomNavbarComponent from './Components/BottomNavbarComponent';
import Admin from './Admin/Admin';
import Student from './Student/Student';

function App() {
	return (
		<div className="App">
			<TopNavbarComponent />
			<Container className="topnav-margin">
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/about" component={About} />
					<Route path="/admin" component={Admin} />
					<Route path="/student" component={Student} />
					<Route component={PageNotFound} />
				</Switch>
			</Container>
			<BottomNavbarComponent />
		</div>
	);
}

export default App;