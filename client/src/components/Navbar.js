import React, { Component } from 'react'
import { Menu} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Reminder from './Reminder'
import { connect } from "react-redux"

class Navbar extends Component {
    
    render() {
        return (
            <div className="nav" style={{height:"100%"}}>
                <Menu size="huge" vertical style={{height:"100%", minHeight:"500px", backgroundColor:"#F0f0f0", marginTop:"-5.5%", marginLeft:"-1%"}}>
                    {this.props.currentUser.length === 0 ?
                        <Reminder /> 
                    :
                        <h1 style={{letterSpacing:"2px", marginTop:"3%"}}>Hi, {this.props.currentUser.username}!</h1>
                    }
                    <Menu.Item ><Link to="/" style={{fontWeight:"normal", fontFamily:"Segoe Print", color:"#000000", fontSize:"20px"}}>all recipes</Link></Menu.Item>
                    <Menu.Item><Link to="/createrecipe" style={{fontFamily:"Segoe Print", fontWeight:"normal", color:"#000000", fontSize:"20px"}}>share recipe</Link></Menu.Item>
                    <Menu.Item><Link to="/favorites" style={{fontFamily:"Segoe Print", fontWeight:"normal", color:"#000000",  fontSize:"20px"}}>favorites</Link></Menu.Item>
                    <Menu.Item></Menu.Item>
                </Menu>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
      currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(Navbar)