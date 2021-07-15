const INITIAL_STATE = {
  stories: [
    {key: 1, isSeen: false},
    {key: 2, isSeen: true},
  ],
};

//selector
export const storySelector = state => state.storyState;

export const SET_STORIES = 'user/set';
export const UPDATE_STORY = 'error/set';
export const ADD_STORY = 'error&user/set';

export const setStories = (userName, userId, loginType) => {
  return {
    type: SET_STORIES,
    payload: {
      userName,
      userId,
      loginType,
    },
  };
};

export const updateStory = (userName, userId, loginType) => {
  return {
    type: UPDATE_STORY,
    payload: {
      userName,
      userId,
      loginType,
    },
  };
};

export const addStory = errorMessage => {
  return {
    type: ADD_STORY,
    payload: {
      errorMessage,
    },
  };
};

export const storyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_STORY:
      return {
        ...state,
        loginType: action.payload.loginType,
        userId: action.payload.userId,
        userName: action.payload.userName,
        isLoggedIn: true,
      };

    default:
      return state;
  }
};
