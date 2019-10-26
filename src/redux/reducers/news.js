import { FETCH_NEWS, FETCH_NEWS_SUCCESS, LIKE_NEWS } from "../actions/news";

export default (state = {}, action) => {
  const { filter } = action;

  switch (action.type) {
    case FETCH_NEWS:
      return { ...state, [filter]: { loading: true } };

    case FETCH_NEWS_SUCCESS:
      return { ...state, [filter]: { ...action.json, loading: false } };

    case LIKE_NEWS:
      state[filter].articles[action.index].liked = !state[filter].articles[action.index].liked;
      return {
        ...state
      };

    default:
      return state;
  }
};
