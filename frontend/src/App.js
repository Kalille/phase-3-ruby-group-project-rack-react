import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import CarForm from "./CarForm";
import Home from './Home'
import MechanicsTable from "./MechanicsTable";
import NavBar from './NavBar'
import ClientsPage from "./ClientsPage";
import Mechanic from "./Mechanic";
import MechForm from "./MechForm"
import Client from "./Client";

import AssignmentChart from "./AssignmentChart";

function App() {
  return (
    <Router>
      
     
    <div className="App">
    <NavBar/>
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/CarForm' component={CarForm}/>
    <Route exact path='/MechanicsTable' component={MechanicsTable}/>
    <Route exact path='/Mechanic/:id' component={Mechanic}/>
    <Route exact path='/ClientsPage' component={ClientsPage}/>
    <Route exact path='/MechForm' component={MechForm}/>
    <Route exact path='/AssignmentChart/:id' component={AssignmentChart}/>
    <Route exact path='/Client/:id' component={Client}/>
    {/* <Route exact path='/AssignmentChart/client/:id' component={AssignmentChart}/> */}

    </Switch>
 
    </div>
    </Router>
  );
}

export default App;
