import React, { Component } from 'react'
import { Form, Rating } from 'semantic-ui-react'
import { connect } from "react-redux"
import { updateRR } from "./actions/rootActions"

class CreateReview extends Component {

    state = { 
        rating: 0 
    }

    calculateAverage = (number) => {
        let reviews = this.props.recipe.reviews.map(r => r.score)
        reviews.push(number)
        const avg = Math.round(reviews.reduce((a,b) => a + b, 0) / reviews.length)
        fetch("/recipes/" + this.props.recipe.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                average: avg
            })
        })
        .then((response) => response.json())
        .then(data => {
            this.props.updateRR(data)
            this.props.updateModalClick()
        })   
    }

    handleSubmitRating = (event, number) => {
        event.preventDefault()
        fetch("/reviews", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                score: number.rating, recipe_id: this.props.recipe.id, text: number.text, user_id: this.props.currentUser.username
            })
        })
        .then((response) => response.json())
        .then(data => {
            if (data.errors){
                window.alert("Review submission failed.")
            }
            else {
                window.alert("Review submitted.")
                this.calculateAverage(number.rating)
            }
        })
    }

    handleChange = (event) => {
        this.setState ({
            text: event.target.value
        })
    }
    
    handleRating = (e, { rating, maxRating }) =>
        this.setState({ rating, maxRating })

    render() {
        return (
            <>
            <center>                   
                <Form style={{marginTop:"-2%"}} onSubmit= { (event) => {this.handleSubmitRating(event, this.state)} }>
                    <Form.TextArea
                        style={{width:"300px"}}
                        type="text"
                        id="text"
                        placeholder="Write Review..."
                        value={this.state.text} 
                        onChange={this.handleChange}
                    />
                    <Rating size="massive" maxRating={5} onRate={this.handleRating} />
                    <Form.Button circular basic color="black" style={{width:"130px", marginTop:"3%"}} content='Submit'/>        
                </Form>   
            </center>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
       currentUser: state.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        updateRR: (recipe) =>  { dispatch(updateRR(recipe)) } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateReview)