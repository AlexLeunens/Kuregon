import './App.css';
import CustomAppBar from './Components/AppBar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Components/Home'
import Tech from './Components/Tech'
import Workout from './Components/Workout'

const App = () => {

  const categories = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Tech",
      link: "/tech",
    },
    {
      name: "Workout",
      link: "/workout",
    },
  ]


  return (
    <div className="App">

      <Router>

        <CustomAppBar categories={categories} />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/tech">
            <Tech />
          </Route>
          <Route path="/workout">
            <Workout />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
