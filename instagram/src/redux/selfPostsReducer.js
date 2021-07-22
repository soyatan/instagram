const INITIAL_STATE = 0;

//selector
export const selfPostsSelector = state => state.selfPostsState;

export const COUNT_POSTS = 'posts/count';
export const COUNT_POSTS_REQUEST = 'posts/count/request';
export const countSelfPostsRequest = () => {
  return {
    type: COUNT_POSTS_REQUEST,
  };
};
export const countSelfPosts = number => {
  return {
    type: COUNT_POSTS,
    payload: {
      number,
    },
  };
};

export const selfPostsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COUNT_POSTS:
      return action.payload.number;

    default:
      return state;
  }
};
