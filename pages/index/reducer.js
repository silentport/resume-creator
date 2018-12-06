import {
    ADDEDUCATION
} from './actionTypes';

export default (state = [], action) => {
    const {
        type,
        payload
    } = action;

    switch (type) {
        case ADDEDUCATION:
            return []
        default:
            return state
    }
}