import React, { Component } from 'react'
import { Rating, Divider } from 'semantic-ui-react'

class RecipeReviews extends Component {

    render() {
        const reviews = this.props.reviews.map(r => {           
            return(
                <div key={r.text} style={{letterSpacing:".5px"}}>
                    <b>{r.user_id}</b> {r.created_at.substring(0, 10)}<br></br>
                    <Rating size="small" key={r.recipe_id} rating={r.score} disabled maxRating={5}/> 
                    <br></br>
                    "{r.text}" 
                    <Divider></Divider>
                </div>
            )
        })
        return (
            <>
            {reviews}
            </>
        )
    }
}

export default RecipeReviews