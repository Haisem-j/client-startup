import MenuBook from "@material-ui/icons/MenuBook";
import MyRecipe from "@material-ui/icons/Restaurant";
import Logout from "@material-ui/icons/ExitToApp";
import Account from '@material-ui/icons/AccountCircle';

function SideBar() {
  return (
    <section className="sidebar-container">
      <div className="sidebar-logo">
        <img src="/images/navbar/logo1.png" alt="logo"/>
        <span>YUMMY RECIPES</span>
      </div>
      <div className="sidebar-name">Hello, <span>Haisem Jemal</span></div>
      <div className="sidebar-menu">
        <div className="sidebar-menu-title">Menu</div>
        <div className="sidebar-menu-options">
          <div className="menu-option">
            <MenuBook className="menu-icon" />
            <div className="menu-name">Search Recipe</div>
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
      <img className="sidebar-bottom-pic" src="/images/navbar/sidebar-pic.png" alt="sidebar pic" />
    </section>
  );
}

export default SideBar;
