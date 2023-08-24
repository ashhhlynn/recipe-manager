import React, { Component } from 'react'
import { Menu, Button, Label} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import { sortCategory } from "./actions/rootActions"

class Navbar extends Component {

    sortCat = (event) => {
        this.props.sortCategory(event.target.id)
    }
    
    render() {
        let categories = this.props.categories.map(c => {
            return (
                <>
                <Label onClick={this.sortCat} id={c.id} style={{background:"none", cursor:"pointer"}}>
                    {c.title}
                </Label><br></br>
                </>
            )
        })

        return (
            <div className="nav" style={{height:"98%"}}>
                <Menu size="huge" vertical style={{ letterSpacing:"1px", backgroundColor:"#F0f0f0", height:"100%", minHeight:"500px", marginTop:"6%", marginLeft:"-1%"}}>         
                    {this.props.currentUser.length === 0 ?
                        <>
                        <Menu.Item><Button as={Link} to='/signup' circular>Sign Up</Button></Menu.Item>
                        <Menu.Item ><Link to="/" style={{ color:"#000000", fontSize:"18px"}}>all recipes</Link><br></br>
                            <p style={{marginTop:"2%", fontSize:"14px"}}>
                                <b>categories</b><br></br>
                                {categories}
                            </p>
                        </Menu.Item>
                        <Menu.Item><Link to="/signup" style={{ color:"#000000", fontSize:"18px"}}>share recipe</Link></Menu.Item>
                        <Menu.Item><Link to="/signup" style={{color:"#000000",  fontSize:"18px"}}>favorites</Link></Menu.Item>
                        <Menu.Item></Menu.Item>
                        </>
                    :
                        <>
                        <h1 style={{marginTop:"4%", fontSize:"24px"}}>Hi, {this.props.currentUser.username}!</h1>                
                        <Menu.Item ><Link to="/" style={{ color:"#000000", fontSize:"18px"}}>all recipes</Link><br></br>
                            <p style={{marginTop:"2%", fontSize:"14px"}}>
                                <b>categories</b><br></br>
                                {categories}
                            </p>
                        </Menu.Item>
                        <Menu.Item><Link to="/createrecipe" style={{ color:"#000000", fontSize:"18px"}}>share recipe</Link></Menu.Item>
                        <Menu.Item><Link to="/favorites" style={{color:"#000000",  fontSize:"18px"}}>favorites</Link></Menu.Item>
                        <Menu.Item></Menu.Item>
                    </>
                    }
                </Menu>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
      currentUser: state.currentUser,
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
      sortCategory: (id) =>  { dispatch(sortCategory(id)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)