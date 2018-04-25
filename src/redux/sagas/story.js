import { select, call, put, fork } from 'redux-saga/effects'
import storage from 'xp-storage'
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
  storyDetailPending
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
    // 如果ls存在缓存，直接使用缓存
    let beforeCache = storage.get('before') || {}
    let data
    yield put(beforeListPending(true)) // 请求状态设置为true
    if (beforeCache[date]) {
      data = beforeCache[date]
    } else {
      const res = yield call(request, {
        url: urls.storyBefore,
        params: { date }
      })
      data = res['STORIES']
      // 设置缓存数据
      beforeCache[date] = data
      storage.set('before', beforeCache)
    }
    yield put(storyDateSuccess(data.date)) // 先设置请求的日期
    const newList = story.beforeList.concat([data])
    yield put(beforeListSuccess(newList))
    yield put(beforeListPending(false))
  } catch (error) {
    yield put(beforeListError(error))
    yield put(beforeListPending(false))
  }
}

export function * storyDetailAsync(params) {
  try {
    yield put(storyDetailSuccess({})) // 清空原有数据
    const id = params.data
    // 如果ls存在缓存，直接使用缓存
    let detailCache = storage.get('detail') || {}
    let data
    yield put(storyDetailPending(true)) // 请求状态设置为true
    if (detailCache[id]) {
      data = detailCache[id]
    } else {
      const res = yield call(request, {
        url: urls.storyDetail,
        params: { id }
      })
      data = res['CONTENTS']
      // 设置缓存数据
      detailCache[id] = data
      storage.set('detail', detailCache)
    }
    yield put(storyDetailSuccess(data))
    yield put(storyDetailPending(false))
  } catch (error) {
    yield put(storyDetailError(error))
    yield put(storyDetailPending(false))
  }
}
