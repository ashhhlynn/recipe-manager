import React, { Component } from 'react'
import { Button, Grid, Segment, Card, Item } from 'semantic-ui-react'
import { connect } from "react-redux"
import Navbar from './Navbar'
import Recipe from './Recipe'
import { fetchRecipes } from "./actions/rootActions"
import { sortAToZ } from "./actions/rootActions"
import { sortNumberReviews } from "./actions/rootActions"
import { sortDate } from "./actions/rootActions"
import { sortRating } from "./actions/rootActions"

class Recipes extends Component {        
    
    componentDidMount() {
        fetch("/recipes")
        .then(resp => resp.json())
        .then(data => {
            this.props.fetchRecipes(data)
        })
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

    render() {
        const recipeGroup = this.props.recipes.map( r => {
            return (
                <Recipe recipe={r} key={r.name}/>
            )
        })
        return (
            <Segment style={{ height:"100%", marginLeft:"-7%", marginRight:"-6.5%", marginTop:"-1.4%" }}>
                <Grid stackable columns={2} >
                    <Grid.Column style={{width:"300px"}}> 
                        <Navbar/>
                    </Grid.Column>
                    <Grid.Column>  
                        <Item style={{width:"850px", marginLeft:"9%"}}> 
                            <Button id="3" style={{letterSpacing: "1px"}} circular onClick={(event)=>{this.sortItems(event)}}>name</Button> 
                            <Button id="2" style={{letterSpacing: "1px"}} circular onClick={(event)=>{this.sortItems(event)}}>date</Button> 
                            <Button id="1" style={{letterSpacing: "1px"}} circular onClick={(event)=>{this.sortItems(event)}}>rating</Button> 
                            <Button id="4" style={{letterSpacing: "1px"}} circular onClick={(event)=>{this.sortItems(event)}}>reviews</Button> 
                        </Item>
                        <Card.Group itemsPerRow={3} style={{width:"890px", marginTop: "1%", marginLeft:"6.2%"}}>
                            {recipeGroup}
                        </Card.Group>
                    </Grid.Column>
                </Grid>
            </Segment>
        )     
    }

}

const mapStateToProps = (state) => {
    return { 
        recipes: state.recipes,
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        fetchRecipes: (recipes) =>  { dispatch(fetchRecipes(recipes)) }, 
        sortAToZ: () =>  { dispatch(sortAToZ()) },
        sortNumberReviews: () =>  { dispatch(sortNumberReviews()) },
        sortDate: () =>  { dispatch(sortDate()) },
        sortRating: () =>  { dispatch(sortRating()) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes)