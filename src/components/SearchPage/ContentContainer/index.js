import SearchContainer from "../SearchContainer/index.jsx";
import RecipeSearchContainer from "../RecipeSearchContainer/index";

import { connect } from "react-redux";

function ContentContainer(props) {
  if (!props.isCollapsed) {
    return (
      <div className="content-container">
        <SearchContainer />
        <RecipeSearchContainer />
      </div>
    );
  }else{
    return (
      <div className="content-container" style={{width: "96%"}}>
        <SearchContainer />
        <RecipeSearchContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, null)(ContentContainer);
