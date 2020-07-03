import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

const Nav = (props) => (
  <div className="nav">
    <Link to="/home">
      <h2 className="nav-title">Prime Solo Project</h2>
    </Link>
    <div className="nav-right">

        {props.user.auth_level > 1 &&
          <Link className="nav-link" to="/admin/Home">
            Admin Tools
          </Link>
        }
        <Link className="nav-link" to="/home">
          Timer
        </Link>
        {props.user.id ?
        <>
          <Link className="nav-link" to="/yourTeas">
            Your Teas
          </Link>
          <Link className="nav-link" to="/browse">
            Browse Teas
          </Link>
          <LogOutButton className="nav-link"/>
        </>
        : 
        <>
          <Link className="nav-link" to="/yourTeas">
            Log In/ Register
          </Link>
        </>
        }
      {/* Always show this link since the about page is not protected */}
      <Link className="nav-link" to="/about">
        About
      </Link>
    </div>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
