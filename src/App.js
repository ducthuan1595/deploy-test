import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import "./App.css";

import Home from "./views/Home";
import ImageInput from "./views/ImageInput";
import VideoInput from "./views/VideoInput";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter
          history={createHistory({ basename: process.env.PUBLIC_URL })}
        >
          <div className="route">
            <Route exact path="/" component={Home} />
            <Route exact path="/photo" component={ImageInput} />
            <Route exact path="/camera" component={VideoInput} />
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
