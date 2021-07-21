const INITIAL_STATE = [];

//selector
export const popularUserSelector = state => state.popularUserState;

export const FETCH_POPULAR_USERS = 'users/popular/fetch';
export const SET_POPULAR_USERS = 'users/popular/set';
export const ADD_POPULAR_USERS = 'users/popular/add';
export const ADD_POPULAR_USER_PHOTOS = 'users/popular/add/photos';
export const addPopularUserPhotos = (userid, links) => {
  return {
    type: ADD_POPULAR_USER_PHOTOS,
    payload: {
      links,
      userid,
    },
  };
};
export const fetchPopularUsersRequest = selfId => {
  return {
    type: FETCH_POPULAR_USERS,
    payload: {
      selfId,
    },
  };
};
export const setPopularUsers = (user, userid, links) => {
  return {
    type: SET_POPULAR_USERS,
    payload: {
      links,
      userid,
      user,
    },
  };
};

export const addPopularUsers = user => {
  return {
    type: ADD_POPULAR_USERS,
    payload: {
      user,
    },
  };
};
export const popularUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_POPULAR_USERS:
      const newPop = {...action.payload.user, postlinks: action.payload.links};
      return [...state, newPop];

    case ADD_POPULAR_USERS:
      return [...state, action.payload.user];
    case ADD_POPULAR_USER_PHOTOS:
      const photolinks = action.payload.links;
      const newState = state.map(user => {
        if (user.uid === action.payload.userid) {
          return {...user, postlinks: photolinks};
        } else {
          return user;
        }
      });
      return newState;
    default:
      return state;
  }
};
