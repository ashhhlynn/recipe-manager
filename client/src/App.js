import './App.css'
import 'semantic-ui-css/semantic.min.css'
import React, { Component } from 'react'
import Recipes from './components/Recipes'
import CreateRecipeContainer from './components/CreateRecipeContainer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container, Segment, Grid } from 'semantic-ui-react'
import Login from './components/Login'
import Signup from './components/Signup'
import Favorites from './components/Favorites'
import Head from './components/Head'
import { connect } from "react-redux"
import { fetchFavorites } from "./components/actions/rootActions"
import { checkUser } from "./components/actions/rootActions"
import { fetchCategories } from "./components/actions/rootActions"
import Navbar from './components/Navbar'
import { fetchRecipes } from "./components/actions/rootActions"

class App extends Component {

  componentDidMount = () => {
    this.fetchAllRecipes()
    fetch("/categories")
    .then(resp => resp.json())
    .then(data => {
      this.props.fetchCategories(data)
    })    
    fetch("/profile")
    .then(resp => resp.json())
    .then(data => {
      this.props.checkUser(data.user)
      if (data.user !== null) {
        fetch("/favorites")
        .then(response => response.json())
        .then(data => {
          this.props.fetchFavorites(data)
        })
      }
    })
  }
  
  fetchAllRecipes = () => {
    fetch("/recipes")
    .then(resp => resp.json())
    .then(data => {
        this.props.fetchRecipes(data)
    })
  }

  render() {
    return (
      <Router>
        <div className="App">   
          <Head/>
          <Container style={{marginTop:"1.3%"}}>
            <Segment style={{height:"100%", marginLeft:"-7%", marginRight:"-6.5%", marginTop:"-1.4%" }}>
              <Grid stackable columns={2} >
                <Grid.Column style={{width:"300px"}}> 
                  <Navbar categories={this.props.categories}/>
                </Grid.Column>
                <Grid.Column>
                  <Switch>
                    <Route exact path="/">
                      <Recipes/>
                    </Route>
                    <Route exact path="/createrecipe">
                      <CreateRecipeContainer fetchAllRecipes={this.fetchAllRecipes} categories={this.props.categories}/>
                    </Route>
                    <Route exact path="/favorites">
                      <Favorites/>
                    </Route>
                    <Route exact path="/login">
                      <Login fetchAllRecipes={this.fetchAllRecipes}/>
                    </Route>
                    <Route exact path="/signup">
                      <Signup fetchAllRecipes={this.fetchAllRecipes}/>
                    </Route>
                  </Switch>
                </Grid.Column>
              </Grid>
              <br></br>
            </Segment>
          </Container>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    checkUser: (user) =>  { dispatch(checkUser(user)) },
    fetchFavorites: (favorites) =>  { dispatch(fetchFavorites(favorites)) }, 
    fetchCategories: (favorites) =>  { dispatch(fetchCategories(favorites)) }, 
    fetchRecipes: (recipes) =>  { dispatch(fetchRecipes(recipes)) } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)