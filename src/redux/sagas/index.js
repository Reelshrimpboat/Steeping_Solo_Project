import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import teasSaga from './teasSaga';
import usersTeasSaga from './usersTeasSaga';
import ratingSaga from './ratingSaga';
import fetchReviewSaga from './fetchReviewSaga';
import postOwnedSaga from './postOwnedSaga';
import postFavoriteSaga from './postFavoriteSaga';

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
    teasSaga(),
    usersTeasSaga(),
    ratingSaga(),
    fetchReviewSaga(),
    postOwnedSaga(),
    postFavoriteSaga(),
  ]);
}
