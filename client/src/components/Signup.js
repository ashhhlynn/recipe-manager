import React from "react"
import { Segment, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import SignupForm from './SignupForm'
import { useHistory } from "react-router-dom"

function Signup(props) {

    const history = useHistory()

    function handleRoute() {
        props.fetchAllRecipes()
        history.push('/')
    }

    return (
        <div className="form-container"> 
            <Segment style={{marginLeft:"28%", marginTop:"5%", width:"615px"}}>
                <h1>register</h1>
                <p>Already have an account? <Button circular basic size="small" as={Link} to='/login'>Log In</Button></p>
                <SignupForm handleRoute={handleRoute} />
            </Segment>    
        </div>
    )
}

export default Signup