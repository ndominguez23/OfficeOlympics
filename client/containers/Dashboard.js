import React, {Component} from 'react';
import { Container } from '@material-ui/core';
import {CssBaseline} from '@material-ui/core/'; 
import Typography from '@material-ui/core/Typography';
import HeaderMenu from '../components/HeaderMenu.js';
import GameContainer from '../containers/GameContainer.js';
import SideBar from '../components/SideBar.js';


class DashBoard extends Component {
  
  render() { 
  
    return ( 
        <div className="dashboard">
          <HeaderMenu />
          <SideBar {...this.props.user}/>
          <GameContainer {...this.props} />
        </div>
    );
  }
}
 
export default DashBoard;