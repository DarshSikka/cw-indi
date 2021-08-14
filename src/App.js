import logo from "./logo.svg";
import Landing from "./pages/Landing";
import { HashRouter as BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import cookie from "react-cookies";
import { useState } from "react";
import Prof from "./components/App/Prof";
import Stories from "./components/App/Stories";
import ChatApp from "./components/App/ChatApp";
import Profile from "./components/App/Profile";
import NewPost from "./pages/NewPost";
import Nav from "./components/Nav";
import SingleStory from './pages/SingleStory'
function App() {
  const [user, setUser] = useState();
  if (cookie.load("userToken")) {
    fetch(`${process.env.REACT_APP_API_KEY}/auth/authenticate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tok: cookie.load("userToken"),
      }),
    })
      .then((resp) => resp.json())
      .then((result) => {
        if (result.success) {
          setUser(result.msg);
        }
      });
  }

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/app" exact component={Home} />
          <Route path="/assistance" exact component={Prof} />
          <Route path="/stories" exact component={Stories} />
          <Route path="/talk" exact component={ChatApp} />
          {/* <Route path="/profile" exact component={Profile} /> */}
          <Route path="/profile">
            <Profile user={() => user} />
          </Route>
          <Route path="/newpost">
            <NewPost user={() => user} />
          </Route>
          <Route path="/story/:id">
          <SingleStory /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
