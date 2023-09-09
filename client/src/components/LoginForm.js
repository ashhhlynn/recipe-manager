import React, { Component } from "react"
import { connect } from "react-redux"
import { Form } from 'semantic-ui-react'
import { checkUser } from "./actions/rootActions"

class LoginForm extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState ({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event, userData)  => {
        event.preventDefault()
        fetch("/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: userData.email, password: userData.password
            })
        })
        .then((response) => response.json())
        .then(data => {
            if (data.errors) {
                window.alert("Login failed.")
            }
            else {
                this.props.checkUser(data)
                window.alert("Login successful.")
                this.props.handleRoute()
            }
        })
    }
    
    render() {
        return (
            <>                     
            <Form onSubmit={ (event) => { this.handleSubmit(event, this.state)}}>
                <Form.Input
                    required
                    id="email"
                    placeholder="Email"
                    value={this.state.email} 
                    onChange={this.handleChange}
                />               
                <Form.Input
                    required
                    id="password"
                    placeholder="Password"
                    type="password"
                    value={this.state.password} 
                    onChange={this.handleChange}
                /> 
                <Form.Button circular content='Submit'/>
            </Form>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
      checkUser: (user) =>  { dispatch(checkUser(user)) }
    }
}
  
export default connect(null, mapDispatchToProps)(LoginForm)