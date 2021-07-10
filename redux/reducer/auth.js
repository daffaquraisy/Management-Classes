const initStateRegister = {
  fullname: '',
  email: '',
  phone: '',
  password: '',
};

export const registerReducer = (state = initStateRegister, action) => {
  if (action.type === 'SET_REGISTER') {
    return {
      ...state,
      fullname: action.value.fullname,
      email: action.value.email,
      phone: action.value.phone,
      password: action.value.password,
    };
  }

  return state;
};
