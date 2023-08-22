import './App.css'
import 'semantic-ui-css/semantic.min.css'
import React, { Component } from 'react'
import Recipes from './components/Recipes'
import CreateRecipe from './components/CreateRecipe'
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

class App extends Component {

  state = {
    categories: []
  }

  componentDidMount = () => {
    fetch("/categories")
    .then(resp => resp.json())
    .then(data => {
      this.props.fetchCategories(data)
      this.setState({categories: data})
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
  
  render() {
    return (
      <Router>
        <div className="App">   
          <Head/>
          <Container style={{marginTop:"1.3%", border:"none", boxShadow:"none"}}>
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
                      <CreateRecipe categories={this.props.categories}/>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)