import { all, spawn, call, fork } from "redux-saga/effects"

// sagas
import NewsSaga from "./news"

export default function* () {
  // yield fork make executed in the same order
  yield fork(NewsSaga)
  // all(Sagas.map((saga) => {
  //   spawn(function* () {
  //     try {
  //       yield call(saga)
  //     } catch(e) {
  //       console.error("error on root saga", e)
  //     }
  //   })
  // }))
} 