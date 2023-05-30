import './App.css'
import 'semantic-ui-css/semantic.min.css'
import React, { Component } from 'react'
import Recipes from './components/Recipes'
import CreateRecipe from './components/CreateRecipe'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {

  state = {
    recipes: [],
    r: ''
  }
  componentDidMount = () => {
    fetch("/recipes")
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      this.setState({
        recipes: data,
        r: data[0]
      })
  })}
  
  render() {
    console.log(this.state.recipes)
    let x = this.state.r.name
    console.log(x)
 

    return (
      <Router>
        <div className="App">   
            <Switch>
              <Route exact path="/recipes">
                <Recipes/>
              </Route>
              <Route exact path="/createrecipe" >
              <CreateRecipe />
              </Route>
              </Switch>
    
        </div>
      </Router>
    )
  }
}


export default App