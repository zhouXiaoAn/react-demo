import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Redirect,Route} from 'react-router-dom'
import Admin from './components/admin'
import Home from './components/pages/home/home'
import Quick from './components/pages/ordinary/quick'
import Meal from './components/pages/ordinary/meal'
import Breakfask from './components/pages/breakfast/breakfast'
import Pock from './components/pages/meat/pock'
import Chicken from './components/pages/meat/chicken'
import Duck from './components/pages/meat/duck'
import Beef from './components/pages/meat/beef'
import Mutton from './components/pages/meat/mutton'
import Fish from './components/pages/fish/fish'
import Fruits from './components/pages/vegetables/fruits'
import Roots from './components/pages/vegetables/roots'
import Mushrooms from './components/pages/vegetables/mushrooms'
import Leaves from './components/pages/vegetables/leaves'
import Soup from './components/pages/soup/soup'
import Bake from './components/pages/bake/bake'
import Staple from './components/pages/staple/staple'
import Noodles from './components/pages/noodles/noodles'
import Vegetarian from './components/pages/vegetarian/vegetarian'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <Admin>
          <Switch>
            <Route path="/" render={()=>(
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/ordinary/quick" component={Quick} />
                <Route path="/ordinary/meal" component={Meal} />
                <Route path="/breakfast" component={Breakfask} />
                <Route path="/meat/pock" component={Pock} />
                <Route path="/meat/chicken" component={Chicken} />
                <Route path="/meat/duck" component={Duck} />
                <Route path="/meat/beef" component={Beef} />
                <Route path="/meat/mutton" component={Mutton} />
                <Route path="/fish" componnet={Fish} />
                <Route path="/vegetables/fruits" component={Fruits} />
                <Route path="/vegetables/roots" component={Roots} />
                <Route path="/vegetables/mushrooms" component={Mushrooms} />
                <Route path="/vegetables/leaves" component={Leaves} />
                <Route path="/soup" component={Soup} />
                <Route path="/bake" component={Bake} />
                <Route path="/staple" component={Staple} />
                <Route path="/noodles" component={Noodles} />
                <Route path="/vegetarian" component={Vegetarian} />
                <Redirect to="/home" />
              </Switch>
            )} />
          </Switch>
        </Admin>
      </Router>
    );
  }
}

export default App;
