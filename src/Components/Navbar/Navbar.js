import React, { Component } from 'react'
import TopNav from "../Navbar/TopNav/TopNav"
import DownNav from "../Navbar/DownNav/DownNav"
import SideDrawer from "./SideDrawer/SideDrawer"



export default class Navbar extends Component {
    constructor(){
        super()
        this.state={
           sideDrawerOpen:false
          //  SearchOpen: false,
        }
    }

    hamburgerClick=()=>{
        this.setState(prevState=>{
            return {sideDrawerOpen:!prevState.sideDrawerOpen}

        })

    }

    closeClick=()=>{
        this.setState(prevState=>{
            return {sideDrawerOpen:!prevState.sideDrawerOpen}

        })

    }


    render() {

   
        return (
            <div>
                <TopNav />
                <DownNav click={this.hamburgerClick} ToggleSearch={this.ToggleSearch} 
                      CloseSearch={this.CloseSearch}
                      SearchStatus={this.state.SearchOpen}/>
             <SideDrawer close={this.closeClick} show={this.state.sideDrawerOpen}/>
             
            </div>
        )
    }
}