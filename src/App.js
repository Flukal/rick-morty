import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Characters from "./components/Characters";
import Episodes from './components/Episodes';
import Locations from './components/Locations';


function App() {
  return (
    <div className="App">
      <Router>
        <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link to="/" className="nav-link active">Characters</Link>
        </li>
        <li className="nav-item">
          <Link to="/episodes" className="nav-link">Episodes</Link>
        </li>
        <li className="nav-item">
          <Link to="/locations" className="nav-link">Locations</Link>
        </li>
        </ul>
        <Switch>
          <Route path="/" exact={true} component={Characters} />
          <Route path="/episodes" component={Episodes} />
          <Route path="/locations" component={Locations} />
        </Switch>
      </Router>
    </div>
  );
}



export default App;
