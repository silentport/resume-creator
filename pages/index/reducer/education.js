import * as types from '../actionTypes';
import _ from 'lodash';

// 新增教育经历
const createItem = state => {
  const item = _.cloneDeep (state[0]);
  item.id = `${state.length + 1}`;
  item.allowDelete = true;
  item.list.forEach (i => {
    i.name = `${i.name.split ('-')[0]}-${state.length + 1}`;
    i.value = i.default || '';
  });
  item.legend = `教育经历-${state.length + 1}`;
  item.allowDelete = true;
  return item;
};

const map = new Map ([
  [
    types.ADD_EDUCATION,
    state => {
      return [...state, createItem (state)];
    },
  ],

  [
    types.REMOVE_EDUCATION,
    (state, action) => {
      return state
        .filter (item => item.id !== action.id)
        .map ((item, index) => ({
          ...item,
          legend: `教育经历-${index + 1}`,
          id: `${index + 1}`,
        }));
    },
  ],

  [
    types.SET_EDUCATION_VALUE,
    (state, action) => {
      const key = Object.keys (action.payload)[0];
      return state.map (edu => {
        return {
          ...edu,
          list: edu.list.map (item => {
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

export const educationReducer = (state = [], action) => {
  if (map.has (action.type)) {
    return map.get (action.type) (state, action);
  }
  return state;
};
