import { takeLatest } from 'redux-saga/effects'
import { STORY_LIST, STORY_REFRESH, BEFORE_LIST, STORY_DETAIL } from '@/redux/actions/story'
import {
  storyListAsync,
  storyRefreshAsync,
  beforeListAsync,
  storyDetailAsync
} from '@/redux/sagas/story'

export default function * rootSaga() {
  yield takeLatest(STORY_LIST, storyListAsync)
  yield takeLatest(BEFORE_LIST, beforeListAsync)
  yield takeLatest(STORY_REFRESH, storyRefreshAsync)
  yield takeLatest(STORY_DETAIL, storyDetailAsync)
}
