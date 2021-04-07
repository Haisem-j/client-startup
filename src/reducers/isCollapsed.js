const isCollapsed = (init = false, action) => {
    switch (action.type) {
      case "COLLAPSED":
        return action.payload === true ? true : false;
      default:
        return false;
    }
  };
  
  export default isCollapsed;