import React, { Component } from 'react'
import { Icon, Menu, Segment } from 'semantic-ui-react'
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
            <div className="head">
                <Segment style={{marginBottom:"0%"}}>Share, Save, and Score Recipes with Five Ingredients or Less</Segment>
                <Menu borderless icon="labeled" style={{marginTop:"-.6%"}} >
                    <h1 style={{ marginTop:"1.6%", marginLeft:"3%"}}>
                        Dash Dish
                    </h1>
                    <Menu.Menu style={{marginTop:"1%", marginRight:"1%"}} position="right">
                        {this.props.currentUser.length === 0 ?
                            <>
                            <Menu.Item><Icon size="huge"  name="user circle outline"/><Link to ='/login' style={{marginTop:"-10%"}}>sign in</Link></Menu.Item>
                            </>
                        :
                            <>
                            <Menu.Item><Icon size="huge"  name="user circle outline"/><Link to ='/' onClick={this.handleLogout} style={{marginTop:"-10%"}}>sign out</Link></Menu.Item>
                            </>
                        }
                    </Menu.Menu>
                </Menu>
                <div className="picture">
                </div>
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