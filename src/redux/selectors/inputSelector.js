import { createSelector } from "reselect";

import { initialState } from '../reducers/inputReducer';

const selectInput = state => state.input || initialState;

const makeSelectInput = createSelector(
   selectInput,
   substate => substate.input
);

 export {
    selectInput,
    makeSelectInput
};
  