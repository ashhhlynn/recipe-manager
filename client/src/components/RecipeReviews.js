import React, { Component } from 'react'
import { Rating} from 'semantic-ui-react'

class RecipeReviews extends Component {

    render() {
        const reviews = this.props.recipe.reviews.map(r => {           
            return(
                <div key={r.text}>
                    <Rating size="small" key={r.recipe_id} rating={r.score} disabled maxRating={5} /> 
                    <br></br>
                    "{r.text}" {r.created_at.substring(0, 10)}<br></br><br></br>
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