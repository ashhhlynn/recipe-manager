import React, { Component } from "react"
import { connect } from "react-redux"
import { Form, Grid, Segment} from 'semantic-ui-react'
import Navbar from './Navbar'
import { checkUser } from "./actions/rootActions"

class Login extends Component {

    state = {
        email: '',
        password: '',
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
                console.log(data);
                this.props.checkUser(data)
                window.alert("Login successful.")
            }
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
                            <h1 style={{fontFamily:"Segoe Print"}}>Sign In</h1>
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
                                <Form.Button style={{letterSpacing:"1px"}} circular content='Submit' />
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
  

export default connect(null, mapDispatchToProps)(Login)