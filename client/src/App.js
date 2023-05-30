import './App.css'

import React, { Component } from 'react'
import './App.css'
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
        <b>Heyyyyyy there!!!!!</b>



            <Switch>
              <Route exact path="/recipes" element={<Recipes />} />
              <Route exact path="/createrecipe" element={<CreateRecipe />} />

            </Switch>
    
        </div>
      </Router>
    )
  }
}


export default App