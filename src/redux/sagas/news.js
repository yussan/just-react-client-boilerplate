import { put, takeLatest, all, takeEvery } from "redux-saga/effects";
import {
  FETCH_NEWS,
  FETCH_NEWS_ERROR,
  FETCH_NEWS_SUCCESS
} from "../actions/news";

function* fetchNews(action) {
  // ref : https://newsapi.org/docs/endpoints/top-headlines
  const json = yield fetch(
    "https://newsapi.org/v2/top-headlines?country=id&apiKey=37b41fb5a5cd4fd3b35dfefb069a9b38"
  ).then(response => response.json());

  yield put({
    type: FETCH_NEWS_SUCCESS,
    json,
    filter: action.filter || "list"
  });
}

function* actionWatcher() {
  // takeEvery : allows multiple fetchNews instances to be started concurrently
  // takeLatest : only allow only one fetchNews task to run at any moment.
  yield takeEvery(FETCH_NEWS, fetchNews);
}

export default function* newsSaga() {
  yield all([actionWatcher()]);
}
