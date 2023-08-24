import React, { Component } from 'react'
import { Button, Card,  Item  } from 'semantic-ui-react'
import { connect } from "react-redux"
import Recipe from './Recipe'
import { fetchRecipes } from "./actions/rootActions"
import { sortAToZ } from "./actions/rootActions"
import { sortNumberReviews } from "./actions/rootActions"
import { sortDate } from "./actions/rootActions"
import { sortRating } from "./actions/rootActions"
import { recipeSearch } from "./actions/rootActions"
import RecipeSearch from './RecipeSearch'

class Recipes extends Component {        

    componentDidMount = () => {
        fetch("/recipes")
        .then(resp => resp.json())
        .then(data => {
            this.props.fetchRecipes(data)
        })
    }

    getMessage = () => {
        console.log('Recipe rating and reviews updated.')
    }

    sortItems = (event) => {
        if (event.target.id === "1" ) { 
            this.props.sortRating()
        }
        else if (event.target.id === "2" ) { 
            this.props.sortDate()
        }
        else if (event.target.id === "3" ) { 
            this.props.sortAToZ()
        }
        else if (event.target.id === "4" ) { 
            this.props.sortNumberReviews()
        }
    }

    searchRecipes = (recipes) => {
        this.props.recipeSearch(recipes)
    }

    render() {
        const recipeGroup = this.props.recipes.map( r => {
            return (
                <Recipe recipe={r} key={r.name} getUpdate={this.getMessage}/>
            )
        })
        return (
            <>
            <Item style={{marginTop:"2.5%", backgroundColor:"#f0e9ef", width:"850px", marginLeft:"9%"}}> 
                <br></br>
                <h2 style={{marginTop:"-1%"}}>sort recipes</h2>
                <Button id="3" circular onClick={(event)=>{this.sortItems(event)}}>name</Button> 
                <Button id="2" circular onClick={(event)=>{this.sortItems(event)}}>date</Button> 
                <Button id="1" circular onClick={(event)=>{this.sortItems(event)}}>rating</Button> 
                <Button id="4" circular onClick={(event)=>{this.sortItems(event)}}>reviews</Button> 
                <RecipeSearch searchRecipes={this.searchRecipes} recipes={this.props.allRecipes}/>
                <br></br>
            </Item>
            <br></br>
            <Card.Group itemsPerRow={3} style={{width:"890px", marginTop: "1%", marginLeft:"6.2%"}}>
                {recipeGroup}
            </Card.Group>
            </>                
        )     
    }
}

const mapStateToProps = (state) => {
    return { 
        recipes: state.recipes,
        allRecipes: state.allRecipes
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        fetchRecipes: (recipes) =>  { dispatch(fetchRecipes(recipes)) }, 
        sortAToZ: () =>  { dispatch(sortAToZ()) },
        sortNumberReviews: () =>  { dispatch(sortNumberReviews()) },
        sortDate: () =>  { dispatch(sortDate()) },
        sortRating: () =>  { dispatch(sortRating()) },
        recipeSearch: (recipes) =>  { dispatch(recipeSearch(recipes)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes)