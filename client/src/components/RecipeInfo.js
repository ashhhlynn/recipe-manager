import React, { Component } from 'react'
import { Item, Image, Grid, Rating, Button, Divider } from 'semantic-ui-react'
import RecipeReviews from './RecipeReviews'
import CreateReview from './CreateReview'
import { connect } from "react-redux"

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
                <Grid stackable columns={2}>
                    <Grid.Column > 
                        <br></br><br></br><br></br>
                        <Image size="medium" src={this.props.recipe.image_url}/>
                    </Grid.Column>
                    <Grid.Column>
                        <Item style={{marginRight:"10%", textAlign:"center"}}>
                            {this.props.favorites.find(r => r.recipe_id == this.props.recipe.id) ?
                                <>
                                <Button style={{marginRight:"-7%"}} onClick={this.props.removeFavorite} circular floated="right">
                                    <center>Remove</center>
                                </Button>
                                </>
                            :
                                <>
                                <Button style={{marginRight:"-7%"}} onClick={this.props.addToFavorites} circular floated="right">
                                    <center>Favorite</center>
                                </Button>
                                </>
                            }
                            <br></br><br></br>
                            <h1 style={{marginTop:"3%"}}>{this.props.recipe.name}</h1>
                            <Rating style={{marginTop:"-6%"}} size="huge" key={this.props.recipe.id} rating={this.props.recipe.average} disabled maxRating={5} />
                            <Divider></Divider>
                            <br></br>
                            <CreateReview recipe={this.props.recipe} updateModalClick={this.updateModal}/>
                        </Item>
                    </Grid.Column>
                </Grid>
                <br></br>
                <Divider></Divider>
                <Item style={{textAlign:"left", marginLeft:"10%", marginRight:"10%"}}>
                    <h3><b>ingredients</b></h3>
                    <h4 style={{marginTop:"-.25%"}}>{recipe_ingredients}</h4>
                    <Divider></Divider>
                    <h3 style={{marginTop:"-.25%"}}><b>instructions</b></h3>
                    <h4 style={{marginTop:"-.25%"}}>{this.props.recipe.description}</h4> 
                    <Divider></Divider>
                    <h3 style={{marginTop:"-.25%"}}><b>reviews</b></h3>
                    {this.props.recipe.reviews.length !== 0 ?
                        <>
                        <RecipeReviews reviews={this.props.recipe.reviews}/>
                        </>
                    :
                        <h4 style={{marginTop:"-.25%"}}>This recipe has not been reviewed yet.</h4>
                    }
                </Item>  
            </center>  
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        favorites: state.favorites,
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(RecipeInfo)