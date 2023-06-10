import React, { Component } from 'react'
import { Form, Grid, Button,  Segment, Item } from 'semantic-ui-react'
import Navbar from './Navbar'

class CreateRecipe extends Component {

    state = {
        id:'',
        name: '',
        description: '',
        image_url: '',
        ingredient1: '',
        ingredient2: '',
        ingredient3: '',
        ingredient4: '',
        ingredient5: '',
        recipe_ingredients: []
    }

    addIngredient = (event) => {
        event.preventDefault()
        if (this.state.recipe_ingredients.length <= 4) {
            this.state.recipe_ingredients.push(this.state[event.target.id])
            window.alert("Ingredient added.")}
        else {
            window.alert("must be under 5 ingredients.")
        }
    }

    handleChange = (event) => {
        this.setState ({
            [event.target.id]: event.target.value
        })
    }
    
    handleSubmit = (event, recipe) => {
        event.preventDefault()
        fetch("/recipes", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: recipe.name, 
                user_id: 1, 
                description: recipe.description, 
                image_url: recipe.image_url, 
                average: 0, 
                recipe_ingredients: recipe.recipe_ingredients,
            })
        })
        .then((response) => response.json())
        .then(data => {
            if (data.errors) {
                    window.alert("Recipe submission failed.")
                }
            else {
                console.log(data);    
                window.alert("Recipe created.")
            }
        })
    }          

    render() {
        return ( 
            <Segment style={{height:"100%", marginLeft:"-7%", marginRight:"-6.5%", marginTop:"-1.4%" }}>
                <Grid stackable columns={2} >
                    <Grid.Column style={{width:"300px"}}> 
                        <Navbar />
                    </Grid.Column>
                    <Grid.Column>
                        <Segment style={{marginLeft:"29.5%", marginTop:"2%", width:"615px"}}>
                            <h1 style={{ fontFamily:"Segoe Print", marginTop:"1.5%"}}>Share Recipe</h1>
                            <Form success onSubmit= { (event) => {this.handleSubmit(event, this.state)}}>
                            <Form.Input
                            required
                            type="text"
                            id="name"
                            placeholder="Name"
                            value={this.state.name} 
                            onChange={this.handleChange}
                            />
                            <Form.Input
                            required
                            type="text"
                            id="image_url"
                            placeholder="Image URL"
                            value={this.state.image_url} 
                            onChange={this.handleChange}
                            />
                            <Form.TextArea
                            required
                            type="text"
                            id="description"
                            placeholder="Instructions"
                            value={this.state.description} 
                            onChange={this.handleChange}
                            />    
                            <h2 >Ingredients</h2>
                            <p>Click plus button to add ingredient.</p>
                            <br></br>
                            <Item style={{marginLeft: "30%"}}>
                                <Form.Group>
                                    <Form.Input
                                    required
                                    type="text"
                                    id="ingredient1"
                                    placeholder="Ingredient"
                                    value={this.state.ingredient1} 
                                    onChange={this.handleChange}
                                    />                    
                                    <Button id="ingredient1" basic color="grey" onClick={this.addIngredient} >+</Button>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Input
                                    type="text"
                                    id="ingredient2"
                                    placeholder="Ingredient"
                                    value={this.state.ingredient2} 
                                    onChange={this.handleChange}
                                    />
                                    <Button id="ingredient2" basic color="grey" onClick={this.addIngredient} >+</Button>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Input                       
                                    type="text"
                                    id="ingredient3"
                                    placeholder="Ingredient"
                                    value={this.state.ingredient3} 
                                    onChange={this.handleChange}
                                    />
                                    <Button id="ingredient3" basic color="grey" onClick={this.addIngredient} >+</Button>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Input
                                    type="text"
                                    id="ingredient4"
                                    placeholder="Ingredient"
                                    value={this.state.ingredient4} 
                                    onChange={this.handleChange}
                                    />
                                    <Button id="ingredient4" basic color="grey" onClick={this.addIngredient} >+</Button>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Input
                                    type="text"
                                    id="ingredient5"
                                    placeholder="Ingredient"
                                    value={this.state.ingredient5} 
                                    onChange={this.handleChange}
                                    />
                                    <Button id="ingredient5" basic color="grey" onClick={this.addIngredient} >+</Button>
                                </Form.Group>
                            </Item> 
                            <Form.Button circular style={{marginTop:"5%", letterSpacing: "1px"}} className="formButtons" content='Save Recipe'/>        
                            <br></br>
                            </Form> 
                        </Segment>           
                    </Grid.Column>
                </Grid>
            </Segment>
        )
    }
}

export default CreateRecipe