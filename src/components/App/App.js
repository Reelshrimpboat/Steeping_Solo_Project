import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import {ModalContainer, ModalRoute} from 'react-router-modal'

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../LoginRegister/ProtectedRoute/ProtectedRoute'
import AdminRoute from '../Admin/AdminRouteProtect/AdminRouteProtect'

import AboutPage from '../AboutPage/AboutPage';
import Home from '../HomeTimer/Home/Home';
import SteepPage from '../HomeTimer/SteepPage/SteepPage';
import UsersTeas from '../UsersTeas/UsersTeas';
import Browse from '../Browse/Browse'
import AdminHome from '../Admin/AdminHome/AdminHome'
import AdminAdd from '../Admin/AdminAdd/AdminAdd'
import AdminList from '../Admin/AdminList/AdminList'
import AdminEdit from '../Admin/AdminEdit/AdminEdit'
import TeaPage from '../TeaPage/TeaPage'

import './App.css';
import './react-router-modal.css';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'});
    this.props.dispatch({type: 'FETCH_TEAS'});
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <section className="wrapper">
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/home"
              component={Home}
            />
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            <Route
              exact
              path="/steep"
              component={SteepPage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the Home if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/yourTeas"
              component={UsersTeas}
            />
            <ProtectedRoute
              path="/browse"
              component={Browse}
            />
            {/* Protected routes for Admins */}
            <AdminRoute
              exact
              path="/admin/Home"
              component={AdminHome}
            />
            <AdminRoute
              exact
              path="/admin/add"
              component={AdminAdd}
            />
            <AdminRoute
              exact
              path="/admin/list"
              component={AdminList}
            />
            <AdminRoute
              exact
              path="/admin/edit/:id"
              component={AdminEdit}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <ModalRoute
            exact
            path={`/browse/tea`}
            parentPath='/browse'
            component={TeaPage}
          />
          </section>
          <ModalContainer />
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
