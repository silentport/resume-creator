import * as types from '../actionTypes';
export const selectedReducer = (state = [], action) => {
    switch (action.type) {

        case types.CHANGE_SELECTED:
            return [...action.payload];

        default:
            return state;
    }

}