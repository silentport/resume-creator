import * as types from './actionTypes';

export const addEducation = () => ({
  type: types.ADD_EDUCATION,
});

export const removeEducation = id => ({
  type: types.REMOVE_EDUCATION,
  id,
});
export const setEducationValue = payload => ({
  type: types.SET_EDUCATION_VALUE,
  payload,
});
export const setBasicValue = payload => ({
  type: types.SET_BASIC_VALUE,
  payload,
});
