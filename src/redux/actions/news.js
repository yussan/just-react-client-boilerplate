export const FETCH_NEWS = "FETCH_NEWS";
export const FETCH_NEWS_ERROR = "FETCH_NEWS_ERROR";
export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
export const LIKE_NEWS = "LIKE_NEWS";

export const fetchNews = (filter = "list") => {
  return {
    type: FETCH_NEWS,
    filter
  };
};


export const likeNews = (filter, index) => {
  return {
    type: LIKE_NEWS,
    filter,
    index
  }
}