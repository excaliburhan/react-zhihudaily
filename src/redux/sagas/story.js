import { select, call, put, fork } from 'redux-saga/effects'
import request from '@/api/request'
import urls from '@/api/urls'
import { storyState } from '@/redux/sagas/selectors'
import {
  storyListSuccess,
  storyListError,
  storyRefreshPending,
  storyDateSuccess,
  beforeListSuccess,
  beforeListError,
  beforeListPending,
  storyDetailSuccess,
  storyDetailError,
  storyDetailLoad
} from '@/redux/actions/story'

export function * storyListAsync() {
  try {
    const res = yield call(request, {
      url: urls.storyList
    })
    const data = res['STORIES']
    if (data) {
      yield put(storyListSuccess(data))
      yield put(storyDateSuccess(data.date))
      yield fork(beforeListAsync, { data: data.date }) // 非阻塞请求昨天数据
    }
  } catch (error) {
    yield put(storyListError(error))
  }
}

export function * storyRefreshAsync() {
  try {
    yield put(storyRefreshPending(true)) // 请求状态设置为true
    yield put(beforeListSuccess([])) // 清空历史数据
    const res = yield call(request, {
      url: urls.storyList
    })
    const data = res['STORIES']
    if (data) {
      yield put(storyListSuccess(data))
      yield put(storyDateSuccess(data.date))
      yield fork(beforeListAsync, { data: data.date }) // 非阻塞请求昨天数据
      yield put(storyRefreshPending(false))
    }
  } catch (error) {
    yield put(storyListError(error))
    yield put(storyRefreshPending(false))
  }
}

export function * beforeListAsync(params) {
  try {
    const date = params.data
    const story = yield select(storyState)
    // date参数不存在/storyDate不存在/已经在请求中直接return
    if (!date || !story.storyDate || story.beforeListPending) {
      return
    }
    yield put(beforeListPending(true)) // 请求状态设置为true
    const res = yield call(request, {
      url: urls.storyBefore,
      params: { date }
    })
    let data = res['STORIES']
    if (data) {
      yield put(storyDateSuccess(data.date)) // 先设置请求的日期
      const beforeList = story.beforeList
      data = beforeList.concat(data)
      yield put(beforeListSuccess(data))
    }
    yield put(beforeListPending(false))
  } catch (error) {
    yield put(beforeListError(error))
    yield put(beforeListPending(false))
  }
}

export function * storyDetailAsync(params) {
  try {
    const id = params.data
    const res = yield call(request, {
      url: urls.storyDetail,
      params: { id }
    })
    const data = res['CONTENTS']
    if (data) {
      yield put(storyDetailSuccess(data))
      yield put(storyDetailLoad(true)) // 只要成功加载就设置为true
    }
  } catch (error) {
    yield put(storyDetailError(error))
  }
}
