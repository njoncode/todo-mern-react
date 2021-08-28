import { createSelector } from "reselect";

import { initialState } from '../reducers/todoReducer';

const selectTodo = state => state.todo || initialState;

const makeSelectTodo = createSelector(
   selectTodo,
   substate => substate.todo
);

const makeSelectToggleSubmit = createSelector(
   selectTodo,
   substate => substate.toggleSubmit
);

 export {
    selectTodo,
    makeSelectTodo,
    makeSelectToggleSubmit
};
  