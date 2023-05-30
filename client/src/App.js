import './App.css'
import 'semantic-ui-css/semantic.min.css'
import React, { Component } from 'react'
import Recipes from './components/Recipes'
import CreateRecipe from './components/CreateRecipe'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import Login from './components/Login'
import Signup from './components/Signup'
import Favorites from './components/Favorites'
import Head from './components/Head'
import { connect } from "react-redux"
import { fetchFavorites } from "./components/actions/rootActions"
import { checkUser } from "./components/actions/rootActions"

class App extends Component {

  componentDidMount = () => {
    fetch("/profile")
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      this.props.checkUser(data.user)
    })
    fetch("/favorites")
    .then(response => response.json())
    .then(data => {
      this.props.fetchFavorites(data)
    })
  }
  
  render() {
    return (
      <Router>
        <div className="App">   
          <Head/>
          <Container style={{marginTop:"1.3%"}}>
            <Switch>
              <Route exact path="/recipes">
                <Recipes/>
              </Route>
              <Route exact path="/createrecipe">
                <CreateRecipe/>
              </Route>

              <Route exact path="/favorites">
                <Favorites/>
              </Route>
          
              <Route exact path="/login">
                <Login/>
              </Route>

              <Route exact path="/signup">
                <Signup/>
              </Route>

              </Switch>
              </Container>
    
        </div>
      </Router>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return { 
    checkUser: (user) =>  { dispatch(checkUser(user)) },
    fetchFavorites: (favorites) =>  { dispatch(fetchFavorites(favorites)) }, 
  }
}

export default connect(null, mapDispatchToProps)(App)