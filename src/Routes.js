import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Settings from "./containers/Settings";
import NotFound from "./containers/NotFound";
import Projects from "./containers/Projects"
import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import {myWork} from './constants/Constants'
import BlogPost from './containers/blogs/BlogPost'
import Minesweeper from './containers/projects/minesweeper/Minesweeper'

export default ({ childProps }) => {
  childProps.works = myWork.projects

  return <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/projects" exact component={Projects} props={childProps}/>
    <AppliedRoute path="/blogs/" exact component={Projects} props={childProps}/>
    <AppliedRoute path="/blogs/" exact component={Projects} props={childProps}/>
    <AppliedRoute path='/blogs/:blog' exact component={BlogPost} props = {childProps} />
    <AppliedRoute path="/projects/minesweeper" exact component={Minesweeper} props = {childProps}/>
    {/* <UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
    <UnauthenticatedRoute path="/signup" exact component={Signup} props={childProps} /> */}
    {/* <AuthenticatedRoute path="/settings" exact component={Settings} props={childProps} /> */}
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;
}
