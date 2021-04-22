import { connect } from "react-redux";

const SearchRecipeContainer = ({ isCollapsed }) => {
    return(
        <div className="content-container" style={isCollapsed ? {width: "96%"} : null}>

        </div>
    )
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, null)(SearchRecipeContainer);
