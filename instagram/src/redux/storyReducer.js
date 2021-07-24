const INITIAL_STATE = [];

//selector
export const storySelector = state => state.storyState;

export const SET_STORIES = 'set/story';
export const UPDATE_STORY = 'update/story';
export const ADD_STORY = 'add/story';
export const FETCH_STORIES_REQUEST = 'fetch/stories/request';

export const fetchStoriesRequest = () => {
  return {
    type: FETCH_STORIES_REQUEST,
  };
};

export const setStories = stories => {
  return {
    type: SET_STORIES,
    payload: {
      stories,
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
    case SET_STORIES:
      const storiesToAdd = action.payload.stories;
      const newSortedStoryList = storiesToAdd.sort((a, b) =>
        a.postdate > b.postdate ? -1 : 1,
      );
      return newSortedStoryList;

    default:
      return state;
  }
};
