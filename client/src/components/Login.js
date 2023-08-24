import React from "react"
import { Segment, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import LoginForm from './LoginForm'
import { useHistory } from "react-router-dom"

function Login() {

    const history = useHistory()

    function handleRoute() {
        history.push('/')
    }

    return (
        <>
        <Segment style={{marginLeft:"28%", marginTop:"5%", width:"615px"}}>
            <h1>sign in</h1>
            <p>Haven't made an account? <Button circular basic size="small" as={Link} to='/signup'>Sign Up</Button></p>
            <LoginForm handleRoute={handleRoute}/>
        </Segment>    
        </>
    )
}

export default Login