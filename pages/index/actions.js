import * as types from './actionTypes';


// 基本信息
export const setBasicValue = payload => ({
  type: types.SET_BASIC_VALUE,
  payload,
});

// 教育经历
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

// 实习经历
export const addIntern = () => ({
  type: types.ADD_INTERN,
});

export const removeIntern = id => ({
  type: types.REMOVE_INTERN,
  id,
});
export const setInternValue = payload => ({
  type: types.SET_INTERN_VALUE,
  payload,
})

// 工作经历
export const addJob = () => ({
  type: types.ADD_JOB,
});

export const removeJob = id => ({
  type: types.REMOVE_JOB,
  id,
});
export const setJobValue = payload => ({
  type: types.SET_JOB_VALUE,
  payload,
})

// 个人技能
export const addSkill = () => ({
  type: types.ADD_SKILL,
});

export const removeSkill = id => ({
  type: types.REMOVE_SKILL,
  id,
});
export const setSkillValue = payload => ({
  type: types.SET_SKILL_VALUE,
  payload,
})

// 获奖情况
export const addAward = () => ({
  type: types.ADD_AWARD,
});

export const removeAward = id => ({
  type: types.REMOVE_AWARD,
  id,
});
export const setAwardValue = payload => ({
  type: types.SET_AWARD_VALUE,
  payload,
})

// 自我评价
export const setCommentValue = payload => ({
  type: types.SET_COMMENT_VALUE,
  payload,
});


// 改变简历需要的元素列表
export const changeSelected = payload => ({
  type: types.CHANGE_SELECTED,
  payload,
});