import MenuBook from "@material-ui/icons/MenuBook";
import MyRecipe from "@material-ui/icons/Restaurant";
import Logout from "@material-ui/icons/ExitToApp";
import Account from "@material-ui/icons/AccountCircle";
import MenuIcon from '@material-ui/icons/Menu';
import Cancel from '@material-ui/icons/Cancel';
import BuildIcon from '@material-ui/icons/Build';

import { connect } from "react-redux";
import {toggleSideBar} from '../../redux/actions'
import { useState } from "react";

import { images } from '../../assets/index.js'

function SideBar(props) {
  const [collapsed, setCollapse] = useState(false);

  const handleCollapse = () =>{
    let st =  collapsed ? false : true
    setCollapse(st)
    props.toggleSideBar(st)
  }

  if (!collapsed) {
    return (
      <section className="sidebar-container">
        <div className="sidebar-logo">
          <img src={images.SideBar.logo} alt="logo"/>
          <span>YUMMY RECIPES</span>
          <Cancel className="sidebar-logo-close" onClick={handleCollapse}/>

        </div>
        <div className="sidebar-name">
          Hello, <span>Haisem Jemal</span>
        </div>
        <div className="sidebar-menu">
          <div className="sidebar-menu-title">Menu</div>
          <div className="sidebar-menu-options">
            <div className="menu-option">
              <MenuBook className="menu-icon" />
              <div className="menu-name">Search Recipe</div>
            </div>
            <div className="menu-option">
              <BuildIcon className="menu-icon" />
              <div className="menu-name">Build Your Own</div>
            </div>
            <div className="menu-option">
              <MyRecipe className="menu-icon" />
              <div className="menu-name">My Recipes</div>
            </div>
            <div className="menu-option">
              <Account className="menu-icon" />
              <div className="menu-name">Profile</div>
            </div>
            <div className="menu-option">
              <Logout className="menu-icon" />
              <div className="menu-name">Logout</div>
            </div>
          </div>
        </div>
        <img
          className="sidebar-bottom-pic"
          src={images.SideBar.sidebar_pic}
          alt="sidebar pic"
        />
      </section>
    );
  } else {
    return (
      <section className="sidebar-container-collapsed">
          <MenuIcon className="sidebar-collapsed-icon" onClick={handleCollapse}/>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return state;
};


export default connect(mapStateToProps, {
  toggleSideBar
})(SideBar);