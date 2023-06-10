import React, { Component } from 'react'
import { Item, Image, Grid, Rating, Segment, Divider } from 'semantic-ui-react'
import RecipeReviews from './RecipeReviews'
import CreateReview from './CreateReview'

class RecipeInfo extends Component {

    updateModal = () => {
        this.props.handleUpdate()
    }
    
    render() {
        const recipe_ingredients = this.props.recipe.recipe_ingredients.map(ri => {
            return (
                <div key={ri.id}>{ri.name}</div>
            )
        })
        return (         
            <center>
                <h1 style={{fontWeight:"normal"}}>{this.props.recipe.name}</h1>
                <Rating size="massive" key={this.props.recipe.id} rating={this.props.recipe.average} disabled maxRating={5} />
                <Divider></Divider>
                <Grid stackable columns={2}>
                    <Grid.Column > 
                        <br></br>
                        <Image size="medium" src={this.props.recipe.image_url}/>
                    </Grid.Column>
                    <Grid.Column>
                        <Item style={{marginRight:"17%"}}>
                            <h2>Ingredients</h2>
                            <h3>{recipe_ingredients}</h3>
                            <h3>Instructions: {this.props.recipe.description}</h3><br></br>
                        </Item>
                    </Grid.Column>
                </Grid>
                <Segment style={{marginLeft:"-2%", marginRight:"-2%"}} placeholder>
                    <h2>Reviews</h2>
                    <RecipeReviews reviews={this.props.recipe.reviews} />
                    <br></br>
                    <CreateReview recipe={this.props.recipe} 
                        updateModalClick={this.updateModal}
                    />
                    <br></br>
                </Segment>
            </center>  
        )
    }
}

export default RecipeInfo