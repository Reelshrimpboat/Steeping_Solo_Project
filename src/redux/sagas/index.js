import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import fetchTeasSaga from './fetchTeasSaga';
import usersTeasSaga from './usersTeasSaga';
import fetchReviewSaga from './fetchReviewSaga';
import postOwnedSaga from './postOwnedSaga';
import postFavoriteSaga from './postFavoriteSaga';
import postRatingSaga from './postRatingSaga';
import postReviewSaga from './postReviewSaga';
import postTeaSaga from './postTeaSaga';
import updateTeaSaga from './updateTeaSaga';
import deleteTeaSaga from './deleteTeaSaga';
import removeReview from './removeReviewSaga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    fetchTeasSaga(),
    usersTeasSaga(),
    fetchReviewSaga(),
    postOwnedSaga(),
    postFavoriteSaga(),
    postRatingSaga(),
    postReviewSaga(),
    postTeaSaga(),
    updateTeaSaga(),
    deleteTeaSaga(),
    removeReview(),
  ]);
}
