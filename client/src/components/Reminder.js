import React, { Component } from 'react'
import { Message} from 'semantic-ui-react'

class Reminder extends Component {

    render() {
        return (
            <>
                <Message color="yellow" style={{letterSpacing:"1px", marginBottom:"-.5%", width:"306px"}}>
                    register or login to share recipes, reviews, & favorites
                </Message>   
            </>
        )
    }
}

export default Reminder