import React from "react"
import { Segment} from 'semantic-ui-react'
import CreateRecipe from './CreateRecipe'
import { useHistory } from "react-router-dom"

function CreateRecipeContainer(props) {

    const history = useHistory()

    function handleRoute() {
        history.push('/')
    }
    
    return (
        <>          
        <Segment style={{marginLeft:"29.5%", marginTop:"2%", width:"615px"}}>
            <h1 style={{ marginTop:"1.5%"}}>share recipe</h1>
            <CreateRecipe categories={props.categories} handleRoute={handleRoute} />
        </Segment>
        </>
    )
}

export default CreateRecipeContainer