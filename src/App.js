import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import About from "./About";
import PageNotFound from "./PageNotFound";
import TopNavbarComponent from "./Components/TopNavbarComponent";
import Container from "react-bootstrap/Container";
import BottomNavbarComponent from "./Components/BottomNavbarComponent";
import Admin from "./Admin/Admin";
import Student from "./Student/Student";
import CreateJobContainer from "./Admin/Job/CreateJobContainer";
import ViewJobContainer from "./Student/Job/ViewJobContainer";
import ManageJobContainer from "./Admin/Job/ManageJobsContainer";
import ModifyJobContainer from "./Admin/Job/ModifyJobContainer";
// import "bootstrap/dist/js/bootstrap.bundle";

function App() {
    return (
        <div className="App">
            <TopNavbarComponent />
            <Container className="topnav-margin">
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/about" component={About} />
                    <Route exact path="/admin" component={Admin} />
                    <Route
                        path="/admin/job/create"
                        component={CreateJobContainer}
                    />
                    <Route
                        path="/admin/job/manage"
                        component={ManageJobContainer}
                    />
                    <Route
                        path="/admin/job/modify/:id"
                        component={ModifyJobContainer}
                    />
                    <Route exact path="/student" component={Student} />
                    <Route
                        exact
                        path="/student/job"
                        component={ViewJobContainer}
                    />
                    <Route component={PageNotFound} />
                </Switch>
            </Container>
            <BottomNavbarComponent />
        </div>
    );
}

export default App;
