import { Switch, Route, Redirect } from "react-router-dom";

import SideBar from "./components/SideBar/index.jsx";
import ContentContainerSearch from './components/SearchPage/ContentContainer'
import ContentContainer from "./components/FullRecipePage/ContentContainer";

import "./sass/main.scss";

//
function App() {
  return (
    <div className="App">
      <SideBar />
      <Switch>
        <Route exact path="/search" component={ContentContainerSearch} />
        <Route exact path="/recipe" component={ContentContainer} />
        <Route exact path="/">
          <Redirect to="/search" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
