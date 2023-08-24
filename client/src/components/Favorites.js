import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import { connect } from "react-redux"
import Recipe from './Recipe'
import { fetchFavorites } from "./actions/rootActions"

class Favorites extends Component {     

    componentDidMount = () => {
        this.getFavorites()
    }

    getFavorites = () => {
        if (this.props.currentUser.length !== 0) {
            fetch("/favorites")
            .then(resp => resp.json())
            .then(data => {
                this.props.fetchFavorites(data)
            })
        }
    }

    render() {
        const recipeGroup = this.props.favorites.map( f => {
            return (
                <Recipe recipe={f.recipe} getUpdate={this.getFavorites} key={f.id}/>  
            )
        })  
        return (
            <Card.Group itemsPerRow={3}  style={{width:"890px", marginTop: "1%", marginLeft:"6%"}}>
                {recipeGroup}
            </Card.Group>            
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
        fetchFavorites: ( favorites) =>  { dispatch(fetchFavorites(favorites)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)