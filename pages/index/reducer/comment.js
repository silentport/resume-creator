import * as types from '../actionTypes';
export const commentReducer = (state = {}, action) => {
    switch (action.type) {

        case types.SET_COMMENT_VALUE:
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