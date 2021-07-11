const initHW = {
  homework: [],
};

export const hwReducer = (state = initHW, action) => {
  if (action.type === 'SET_HOMEWORK') {
    return {
      ...state,
      homework: action.value,
    };
  }

  return state;
};
