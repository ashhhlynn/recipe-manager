import React, { Component } from "react"
import { Form, Grid, Segment} from 'semantic-ui-react'
import Navbar from './Navbar'
import { checkUser } from "./actions/rootActions"
import { connect } from "react-redux"

class Signup extends Component {

    state = {
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
    }

    handleSubmit = (event, userData) => {
        event.preventDefault()
        fetch("/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: userData.username, email: userData.email, password: userData.password, password_confirmation: userData.password_confirmation,
            })
        })
        .then((response) => response.json())
        .then(data => {
            if (data.errors) {
                window.alert("Signup failed.")
            }
            else {
                window.alert("Signup successful.")
                this.props.checkUser(data)
            }
        })
    } 

    handleChange = (event) => {
        this.setState ({
            [event.target.id]: event.target.value
        })
    }

    render() {
        return (
            <>
            <Segment style={{height:"100%", marginLeft:"-7%", marginRight:"-6.5%", marginTop:"-1.4%" }}>
                <Grid stackable columns={2} >
                    <Grid.Column style={{width:"300px"}}> 
                        <Navbar/>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment style={{marginLeft:"28%", marginTop:"5%", width:"615px"}}>
                            <h1 style={{fontFamily:"Segoe Print"}}>Register</h1>
                            <Form onSubmit={ (event) => {this.handleSubmit(event, this.state)} }>              
                                <Form.Input
                                required
                                type="text"
                                id="username"
                                placeholder="Username"
                                value={this.state.username} 
                                onChange={this.handleChange}            
                                />
                                <Form.Input
                                required
                                type="text"
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
                                <Form.Input
                                required
                                id="password_confirmation"
                                placeholder="Confirm Password"
                                type="password"
                                value={this.state.password_confirmation} 
                                onChange={this.handleChange}
                                />
                                <Form.Button style={{letterSpacing:"1px"}} circular content="Submit"/>
                            </Form>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </Segment>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
      checkUser: (user) =>  { dispatch(checkUser(user)) },
    }
}  

export default connect(null, mapDispatchToProps)(Signup)