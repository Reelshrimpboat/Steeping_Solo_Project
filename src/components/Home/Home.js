import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

// this could also be written with destructuring parameters as:
// const Home = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const Home = (props) => (
  <div>
    <h1 id="welcome">
      Welcome, { props.user.username }, Pick a Tea, Any Tea!
    </h1>
    <input></input>
    {props.teas &&
        props.teas.map((tea)=>
          <p key={tea.id}>Name: {tea.name}</p>)
      }
  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
  teas: state.teas,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Home);
