import { createSelector } from "reselect";

import { initialState } from '../reducers/signInReducer';

const selectSignIn = state => state.signIn || initialState;

const makeSelectSignIn = createSelector(
   selectSignIn,
   substate => substate
);


const makeSelectEmail = createSelector(
   selectSignIn,
   substate => substate.email
);

const makeSelectPassword = createSelector(
   selectSignIn,
   substate => substate.password
);

const makeSelectIsSignInSuccess = createSelector(
   selectSignIn,
   substate => substate.isSignInSuccess
);

const makeSelectSignInFailureMessage = createSelector(
   selectSignIn,
   substate => substate.signInFailureMessage
);

 export {
    selectSignIn,
    makeSelectSignIn,
    makeSelectEmail,
    makeSelectPassword,
    makeSelectIsSignInSuccess,
    makeSelectSignInFailureMessage
};
  