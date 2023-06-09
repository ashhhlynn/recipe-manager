import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import { logOut } from "./actions/rootActions"

class Head extends Component {

    handleLogout = () => {
        fetch("/logout", {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        this.props.logOut()
    }    

    render() {
        return (
            <div>
                <Menu style={{opacity:"94%", color:"white", backgroundColor:"#702963"}} position="middle">
                    <h3 style={{marginLeft:"40%",  fontSize: "14px", marginTop:".75%"}}>
                        recipes with five ingredients or less <Icon size="small" color="yellow" name="heart"/>
                    </h3>
                </Menu>
                <Menu borderless icon="labeled" style={{marginTop:"-1.3%"}} >
                    <h1 style={{ color: "#702963", fontSize:"38px", marginTop:"1.6%", marginLeft:"3%"}}>
                        Dash Delicious
                    </h1>
                    <Menu.Menu style={{marginTop:"1%", marginRight:"1%"}} position="right">
                        {this.props.currentUser.length === 0 ?
                            <>
                            <Menu.Item><Icon color="grey" size="large" name="user plus"/><Link to ='/signup' style={{marginTop:"-10%", color:"grey", letterSpacing:"1px"}}>sign up</Link></Menu.Item>
                            <Menu.Item><Icon size="huge" color="grey" name="user circle outline"/><Link to ='/login' style={{marginTop:"-10%",  color:"grey", letterSpacing:"1px"}}>sign in</Link></Menu.Item>
                            </>
                        :
                            <>
                            <Menu.Item><Icon size="huge" color="grey" name="user circle outline"/><Link to ='/' onClick={this.handleLogout} style={{marginTop:"-10%", color:"grey", letterSpacing:"1px"}}>sign out</Link></Menu.Item>
                            </>
                        }
                    </Menu.Menu>
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

const mapDispatchToProps = (dispatch) => {
    return { 
      logOut: () =>  { dispatch(logOut()) }, 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Head)