import React, { Component } from 'react'
import { Form, Button, Dropdown, Item } from 'semantic-ui-react'

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
        recipe_ingredients: [],
        category_id: '',
        category_name: 'Category'
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

    handleCategory = (c) => {
        this.setState ({
            category_id: c.id,
            category_name: c.title
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
                category_id: recipe.category_id,
            })
        })
        .then((response) => response.json())
        .then(data => {
            if (data.errors) {
                    window.alert("Recipe submission failed.")
                }
            else {
                window.alert("Recipe created.")
                this.props.handleRoute()
            }
        })
    }          

    render() {
        let categories = this.props.categories.map(c => {
            return (
                <>
                <p style={{cursor:"pointer"}} onClick={ () => {this.handleCategory(c)} }>{c.title}</p><br></br>
                </>
            )
        })
        return ( 
            <>
            <Form success onSubmit={(event) => {this.handleSubmit(event, this.state)}}>
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
                <Dropdown
                    fluid
                    placeholder={this.state.category_name}
                    selection
                    options={categories}
                />
                <h2>ingredients</h2>
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
                        <Button id="ingredient1" basic onClick={this.addIngredient}>+</Button>
                    </Form.Group>
                    <Form.Group>
                        <Form.Input
                            type="text"
                            id="ingredient2"
                            placeholder="Ingredient"
                            value={this.state.ingredient2} 
                            onChange={this.handleChange}
                        />
                        <Button id="ingredient2" basic onClick={this.addIngredient}>+</Button>
                    </Form.Group>
                    <Form.Group>
                        <Form.Input                       
                            type="text"
                            id="ingredient3"
                            placeholder="Ingredient"
                            value={this.state.ingredient3} 
                            onChange={this.handleChange}
                        />
                        <Button id="ingredient3" basic onClick={this.addIngredient}>+</Button>
                    </Form.Group>
                    <Form.Group>
                        <Form.Input
                            type="text"
                            id="ingredient4"
                            placeholder="Ingredient"
                            value={this.state.ingredient4} 
                            onChange={this.handleChange}
                        />
                        <Button id="ingredient4" basic onClick={this.addIngredient}>+</Button>
                    </Form.Group>
                    <Form.Group>
                        <Form.Input
                            type="text"
                            id="ingredient5"
                            placeholder="Ingredient"
                            value={this.state.ingredient5} 
                            onChange={this.handleChange}
                        />
                        <Button id="ingredient5" basic onClick={this.addIngredient}>+</Button>
                    </Form.Group>
                </Item> 
                <Form.Button circular style={{marginTop:"5%"}} content='Save Recipe'/>        
                <br></br>
            </Form>                     
            </>
        )
    }
}

export default CreateRecipe