const INITIAL_STATE = [];

//selector
export const postsSelector = state => state.postsState;

export const FETCH_POSTS = 'posts/fetch';
export const FETCH_POSTS_REQUEST = 'posts/fetch';
export const SET_POSTS = 'posts/set';
export const ADD_POSTS = 'post/add';
export const ADD_POST_FAVORITE = 'post/add/favorite';
export const ADD_POST_LIKE = 'post/add/like';
export const ADD_POST_COMMENT = 'post/add/comment';

export const addToFavorites = (posterId, postId, type) => {
  return {
    type: ADD_POST_FAVORITE,
    payload: {
      posterId,
      postId,
      type,
    },
  };
};
export const addToLikes = (posterId, postId, type) => {
  return {
    type: ADD_POST_LIKE,
    payload: {
      posterId,
      postId,
      type,
    },
  };
};
export const addCommentToPosts = (posterId, postId, posterName, comment) => {
  return {
    type: ADD_POST_COMMENT,
    payload: {
      posterId,
      postId,
      posterName,
      comment,
    },
  };
};
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
  return {
    type: SET_POSTS,
    payload: {
      posts,
    },
  };
};

export const addPosts = posts => {
  return {
    type: ADD_POSTS,
    payload: {
      posts,
    },
  };
};

export const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_POSTS:
      return action.payload.posts;
    case ADD_POSTS:
      const postsToAdd = action.payload.posts;
      const newSortedPostsList = postsToAdd.sort((a, b) =>
        a.postdate > b.postdate ? -1 : 1,
      );
      return newSortedPostsList;

    default:
      return state;
  }
};
