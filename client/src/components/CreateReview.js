import React, { Component } from 'react'
import { Form, Rating } from 'semantic-ui-react'
import { connect } from "react-redux"
import { updateRR } from "./actions/rootActions"

class CreateReview extends Component {

    state = {}

    calculateAverage = (number) => {
        let reviews = this.props.recipe.reviews.map(r => r.score)
        reviews.push(number)
        const avg = Math.round(reviews.reduce((a,b) => a + b, 0) / reviews.length);
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
            console.log(data);
            this.props.updateRR(data)
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
                score: number.rating, recipe_id: this.props.recipe.id, text: number.text
            })
        })
        .then((response) => {
            console.log(response);
            window.alert("Review submitted.")
            this.calculateAverage(number.rating)
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
                <Form onSubmit= { (event) => {this.handleSubmitRating(event, this.state)} }>
                    <Rating color="purple" size="massive" maxRating={5} onRate={this.handleRating} />
                    <Form.TextArea
                        style={{width:"300px"}}
                        type="text"
                        id="text"
                        placeholder=""
                        value={this.state.text} 
                        onChange={this.handleChange}
                    />
                    <Form.Button circular style={{letterSpacing: "1px", width:"130px", color:"white" }}className="formButtons" content='Submit'/>        
                </Form>   
            </center>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        updateRR: (recipe) =>  { dispatch(updateRR(recipe)) }, 
    }
}

export default connect(null, mapDispatchToProps)(CreateReview)