import * as types from '../actionTypes';
export const basicReducer = (state = {}, action) => {
    switch (action.type) {

        case types.SET_BASIC_VALUE:
            const key = Object.keys(action.payload)[0];
            return {
                ...state,
                list: state.list.map(item => {
                    return {
                        ...item,
                        value: item.name === key ? action.payload[key] : item.value
                    }
                })
            }

        default:
            return state;
    }

}