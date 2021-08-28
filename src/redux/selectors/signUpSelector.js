import { createSelector } from "reselect";

import { initialState } from '../reducers/signUpReducer';

const selectSignUp = state => state.signUp || initialState;

const makeSelectSignUp = createSelector(
   selectSignUp,
   substate => substate.user
);

const makeSelectName = createSelector(
   selectSignUp,
   substate => substate.user.name
);

const makeSelectEmail = createSelector(
   selectSignUp,
   substate => substate.user.email
);

const makeSelectPassword = createSelector(
   selectSignUp,
   substate => substate.user.password
);

const makeSelectConfirmPassword = createSelector(
   selectSignUp,
   substate => substate.user.confirmPassword
);

const makeSelectIsSignUpSuccess = createSelector(
   selectSignUp,
   substate => substate.isSignUpSuccess
);

const makeSelectSignUpFailureMessage = createSelector(
   selectSignUp,
   substate => substate.signUpFailureMessage
);


 export {
    selectSignUp,
    makeSelectSignUp,
    makeSelectName,
    makeSelectEmail,
    makeSelectPassword,
    makeSelectConfirmPassword,
    makeSelectIsSignUpSuccess,
    makeSelectSignUpFailureMessage
};
  