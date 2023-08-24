import React, { Component } from 'react'
import {  Card, Modal,  Image, Item, Rating } from 'semantic-ui-react'
import { connect } from "react-redux"
import RecipeInfo from './RecipeInfo'
import { addToFavorites } from "./actions/rootActions"
import { removeFavorite } from "./actions/rootActions"

class Recipe extends Component {        

    state = {
        modalOpen: false, 
    }

    handleOpen = () => {
        this.setState({ modalOpen: true });
    }
    
    handleClose = () => {
        this.setState({ modalOpen: false });
    }

    handleUpdate = () => {
        this.props.getUpdate()
        this.handleClose()
    }

    addToFavorites = () => {
        let id = this.props.recipe.id
        if (!this.props.favorites.find(f=> f.recipe_id === id)) {
            if (this.props.currentUser.length !== 0) {
                fetch("/favorites", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        recipe_id: id, user_id: this.props.currentUser.id 
                    })
                })
                .then((response) => response.json())
                .then(data => {
                    if (data.errors) {
                        window.alert("Failed to add to favorites.")
                    }
                    else {
                        window.alert("Added to favorites.")
                        this.props.addToFavorites(data)
                    }
                })
            }
        }
    }

    removeFavorite = () => {
        if (this.props.currentUser.length !== 0) {
            let fave = this.props.favorites.find(r => parseInt(r.recipe_id) === this.props.recipe.id)
            fetch("/favorites/" + fave.id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(() => {
                this.props.removeFavorite(fave.id)
                window.alert("Removed from favorites.")
            })
        }
    }

    render() {
        const i = this.props.recipe    
        return (
            <>
            <Card>
                <Image style={{cursor:"pointer", width:"270px", height:"260px"}} src= {i.image_url} onClick={this.handleOpen}/>
                <h3 style={{fontSize:"18px", marginTop: "2%", marginBottom:"2%"}}>
                    {i.name}                   
                </h3>
                  
                <Item>
                    <Rating size="small" rating={i.average} disabled maxRating={5} />
                </Item>
                <Modal 
                    open={this.state.modalOpen}
                    onClose={this.handleClose}
                    closeIcon
                >
                    <Modal.Content >
                        <RecipeInfo addToFavorites={this.addToFavorites} removeFavorite={this.removeFavorite} recipe={i} key={i.id} handleUpdate={this.handleUpdate} />
                    </Modal.Content>
                </Modal>
            </Card>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        favorites: state.favorites,
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        addToFavorites: (recipe) =>  { dispatch(addToFavorites(recipe)) },
        removeFavorite: (f) =>  { dispatch(removeFavorite(f)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)