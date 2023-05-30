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
                <Menu style={{textAlign:"center", opacity:"94%", color:"white", backgroundColor:"#702963", marginBottom:"0%"}} position="middle">
                    <h3 style={{marginLeft:"39.5%", fontWeight:"normal", fontSize: "16px", marginTop:".75%", letterSpacing: "1px"}}>
                        recipes with five ingredients or less <Icon size="small" color="yellow" name="heart"/>
                    </h3>
                </Menu>
                <Menu borderless icon="labeled" style={{marginTop:"0%"}} >
                    <h1 style={{fontFamily:"Segoe Print", color: "#702963", fontSize:"40px", marginTop:"1.7%", marginLeft:"3%"}}>
                        Dash Delish
                    </h1>
                    <Menu.Menu style={{marginTop:"1%", marginRight:"1%"}} position="right">
                        {this.props.currentUser.length === 0 ?
                            <>
                            <Menu.Item><Icon color="grey" size="large" name="user plus"/><Link to ='/signup' style={{marginTop:"-10%", color:"grey", letterSpacing:"1px"}}>sign up</Link></Menu.Item>
                            <Menu.Item><Icon size="large" color="grey" name="user outline"/><Link to ='/login' style={{marginTop:"-10%", color:"grey", letterSpacing:"1px"}}>sign in</Link></Menu.Item>
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