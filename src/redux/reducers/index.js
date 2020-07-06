import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import teas from './teasReducer';
import usersTeas from './usersTeasReducer';
import timer from './timerReducer';
import reviews from './reviewReducer'

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  teas, // contains database of teas
  timer, // contains the tea to be timed
  usersTeas, // contains teas owned and rated by user
  reviews, // contains the reviews for selected tea
});

export default rootReducer;
