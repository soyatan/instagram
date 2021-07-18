const INITIAL_STATE = {
  errorMessage: null,
  isLoggedIn: false,
  userId: null,
  country: null,
  userName: null,
  phoneNumber: null,
  email: null,
  loginType: null,
};

//selector
export const userSelector = state => state.userState;

export const SET_USER = 'user/set';
export const SET_ERROR = 'error/set';
export const SET_USERANDERROR = 'error&user/set';

export const SIGNOUT_REQUEST = 'signout/request';
export const SIGNOUT = 'signout';

export const UPDATE_USER_REQUEST = 'user/update';

export const setUser = (userName, userId, loginType) => {
  return {
    type: SET_USER,
    payload: {
      userName,
      userId,
      loginType,
    },
  };
};

export const setError = errorMessage => {
  return {
    type: SET_ERROR,
    payload: {
      errorMessage,
    },
  };
};

export const setUserAndError = (
  country,
  userName,
  userId,
  phoneNumber,
  email,
  loginType,
  errorMessage,
) => {
  return {
    type: SET_USERANDERROR,
    payload: {
      country,
      userName,
      userId,
      phoneNumber,
      email,
      loginType,
      errorMessage,
    },
  };
};
export const signOutRequest = () => {
  return {
    type: SIGNOUT_REQUEST,
  };
};
export const signOutAction = () => {
  return {
    type: SIGNOUT,
  };
};

export const updateUserRequest = () => {
  return {
    type: UPDATE_USER_REQUEST,
  };
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        loginType: action.payload.loginType,
        userId: action.payload.userId,
        userName: action.payload.userName,
        isLoggedIn: true,
      };
    case SET_ERROR:
      return {...state, errorMessage: action.payload.errorMessage};
    case SET_USERANDERROR:
      return {...action.payload, isLoggedIn: true};
    case SIGNOUT:
      return {
        errorMessage: null,
        isLoggedIn: false,
        userId: null,
        loginType: null,
        userName: null,
        popCoin: 0,
        ownedBoards: [],
      };

    default:
      return state;
  }
};
