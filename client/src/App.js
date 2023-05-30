import './App.css'

import React, { Component } from 'react'
import './App.css'
import Recipes from './components/Recipes'
import CreateRecipe from './components/CreateRecipe'

import { Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from "react-redux"

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
        
{x}

          <Container style={{marginTop:"1.3%"}}>

            <Switch>
              <Route exact path="/recipes" element={<Recipes />} />
              <Route exact path="/createrecipe" element={<CreateRecipe />} />

            </Switch>
          </Container>
        </div>
      </Router>
    )
  }
}


export default App