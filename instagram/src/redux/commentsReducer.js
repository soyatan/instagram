const INITIAL_STATE = [];

//selector
export const commentsSelector = state => state.commentsState;

export const SET_COMMENTS = 'set/comments';
export const FETCH_COMMENTS = 'fetch/comments';

export const fetchComments = (posterId, postId) => {
  return {
    type: FETCH_COMMENTS,
    payload: {
      posterId,
      postId,
    },
  };
};
export const setComments = comments => {
  return {
    type: SET_COMMENTS,
    payload: {
      comments,
    },
  };
};
export const commentsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_COMMENTS:
      return action.payload.comments;
    default:
      return state;
  }
};
