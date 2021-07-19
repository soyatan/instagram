const INITIAL_STATE = [];

//selector
export const postsSelector = state => state.postsState;

export const FETCH_POSTS = 'posts/fetch';
export const FETCH_POSTS_REQUEST = 'posts/fetch';
export const SET_POSTS = 'posts/set';
export const ADD_POST = 'post/add';

export const fetchPosts = userId => {
  return {
    type: FETCH_POSTS,
    payload: {
      userId,
    },
  };
};
export const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
  };
};
export const setPosts = posts => {
  console.log(posts);
  return {
    type: SET_POSTS,
    payload: {
      posts,
    },
  };
};

export const addPost = post => {
  return {
    type: ADD_POSTS,
    payload: {
      post,
    },
  };
};

export const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_POSTS:
      return action.payload.posts;

    default:
      return state;
  }
};
