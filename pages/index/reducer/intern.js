import * as types from '../actionTypes';

// 新增实习经历
const createItem = state => {
    return {
        ...state[0],
        id: `${state.length + 1}`,
        allowDelete: true,
        legend: `实习经历-${state.length + 1}`,
        list: state[0].list.map(item => ({
            ...item,
            name: `${item.name.split ('-')[0]}-${state.length + 1}`,
            value: item.default || ''
        })),
    }
};

const map = new Map([
    [
        types.ADD_INTERN,
        state => {
            return [...state, createItem(state)];
        },
    ],

    [
        types.REMOVE_INTERN,
        (state, action) => {
            return state
                .filter(item => item.id !== action.id)
                .map((item, index) => ({
                    ...item,
                    legend: `实习经历-${index + 1}`,
                    id: `${index + 1}`,
                    list: item.list.map(i => ({
                        ...i,
                        name: `${i.name.split('-')[0]}-${index + 1}`
                    }))
                }));
        },
    ],

    [
        types.SET_INTERN_VALUE,
        (state, action) => {
            const key = Object.keys(action.payload)[0];
            return state.map(item => {
                return {
                    ...item,
                    list: item.list.map(item => {
                        return {
                            ...item,
                            value: item.name === key ? action.payload[key] : item.value,
                        };
                    }),
                };
            });
        },
    ],
]);

export const internReducer = (state = [], action) => {
    if (map.has(action.type)) {
        return map.get(action.type)(state, action);
    }
    return state;
};