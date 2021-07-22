const INITIAL_STATE = {
  errorMessage: null,
  isLoggedIn: false,
  userId: null,
  country: null,
  userName: null,
  phoneNumber: null,
  email: null,
  loginType: null,
  pplink: null,
  followers: [],
  following: [],
};

//selector
export const userSelector = state => state.userState;

export const SET_ERROR = 'error/set';
export const ADD_PPLINK = 'pplink/add';
export const FOLLOW_USER_REQUEST = 'user/follow';
export const SET_USERANDERROR = 'error&user/set';

export const SIGNOUT_REQUEST = 'signout/request';
export const SIGNOUT = 'signout';

export const UPDATE_USER_REQUEST = 'user/update';

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
  pplink,
  followers,
  following,
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
      pplink,
      followers,
      following,
    },
  };
};

export const followUserRequest = (selfId, userId) => {
  return {
    type: FOLLOW_USER_REQUEST,
    payload: {
      selfId,
      userId,
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
export const addPPLink = link => {
  return {
    type: ADD_PPLINK,
    payload: {
      link,
    },
  };
};
export const updateUserRequest = () => {
  return {
    type: UPDATE_USER_REQUEST,
  };
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {...state, errorMessage: action.payload.errorMessage};
    case ADD_PPLINK:
      return {...state, pplink: action.payload.link};
    case SET_USERANDERROR:
      return {...action.payload, isLoggedIn: true};

    case SIGNOUT:
      return {
        errorMessage: null,
        isLoggedIn: false,
        userId: null,
        country: null,
        userName: null,
        phoneNumber: null,
        email: null,
        loginType: null,
        pplink: null,
        followers: [],
        following: [],
      };

    default:
      return state;
  }
};
