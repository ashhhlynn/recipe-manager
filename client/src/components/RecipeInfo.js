import React, { Component } from 'react'
import { Item, Image, Grid, Rating, Segment, Divider } from 'semantic-ui-react'
import RecipeReviews from './RecipeReviews'
import CreateReview from './CreateReview'

class RecipeInfo extends Component {

    state = {}
    
    render() {
        const recipe_ingredients = this.props.recipe.recipe_ingredients.map(ri => {
            return (
                <div key={ri.quantity}>{ri.name}</div>
            )
        })
        return (         
            <center>
                <h1 style={{fontFamily:"Segoe Print"}}>{this.props.recipe.name}</h1>
                <Rating size="massive" key={this.props.recipe.id} rating={this.props.recipe.average} disabled maxRating={5} />
                <Divider></Divider>
                <Grid stackable columns={2}>
                    <Grid.Column > 
                        <br></br>
                        <center>
                            <Image size="medium" src={this.props.recipe.image_url}/>
                        </center>
                    </Grid.Column>
                    <Grid.Column>
                        <center>
                            <Item style={{marginRight:"17%"}}>
                                <h2>Ingredients</h2>
                                <h3 style={{fontWeight:"normal"}}>{recipe_ingredients}</h3>
                                <h3 style={{fontWeight:"normal"}}>Instructions: {this.props.recipe.description}</h3><br></br>
                            </Item>
                        </center>
                    </Grid.Column>
                </Grid>
                <Segment style={{marginLeft:"-2%", marginRight:"-2%"}} placeholder>
                    <h2>Reviews</h2>
                    <RecipeReviews recipe={this.props.recipe} />
                    <br></br>
                    <CreateReview recipe={this.props.recipe}/>
                    <br></br>
                </Segment>
            </center>  
        )
    }
}

export default RecipeInfo