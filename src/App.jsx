import { Component } from "react";
import { Route } from "react-router-dom";
import TopNavigation from "components/TopNavigation";
import HomePage from "pages/HomePage";
import FilmsPage from "pages/FilmsPage";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <TopNavigation />
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/films">
          <FilmsPage />
        </Route>
      </div>
    );
  }
}

export default App;
