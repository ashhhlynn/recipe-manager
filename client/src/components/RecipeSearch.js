import _ from 'lodash'
import React, { useState } from 'react'
import { Icon, Button, Item, Form  } from 'semantic-ui-react'

function RecipeSearch(props) {
    
    const [value, setValue] = useState('')

    const searchR = (e) => {
        let value = e.target.value;
        setValue(value)
    }

    const handleSubmit = () => {
        const re = new RegExp(_.escapeRegExp(value), 'i')
        const isMatch = result => re.test(result.name)
        props.searchRecipes((_.filter(props.recipes, isMatch)))
    }
    
    return (
        <>
        <br></br><br></br>
        <Item style={{marginLeft:"34%"}}>
            <Form>
                <Form.Group>
                    <Form.Input
                    required
                    style={{width:"200px"}}
                    type="text"
                    id="name"
                    placeholder="Search Recipes..."
                    onChange={searchR}
                    value={value}
                    />
                    <Button style={{backgroundColor:"white"}} onClick ={ (event) => {handleSubmit(event, value)}}>
                        <center><Icon color="black" name="search"></Icon></center>
                    </Button>
                </Form.Group>
            </Form>
        </Item>
        </>
    )
}

export default RecipeSearch