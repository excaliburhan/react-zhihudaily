export const STORY_LIST = 'story/STORY_LIST'
export const STORY_LIST_SUCCESS = 'story/STORY_LIST_SUCCESS'
export const STORY_LIST_ERROR = 'story/STORY_LIST_ERROR'
export const STORY_DATE_SUCCESS = 'story/STORY_DATE_SUCCESS'
export const BEFORE_LIST = 'story/BEFORE_LIST'
export const BEFORE_LIST_SUCCESS = 'story/BEFORE_LIST_SUCCESS'
export const BEFORE_LIST_ERROR = 'story/BEFORE_LIST_ERROR'
export const BEFORE_LIST_PENDING = 'story/BEFORE_LIST_PENDING'
export const STORY_REFRESH = 'story/STORY_REFRESH'
export const STORY_REFRESH_PENDING = 'story/STORY_REFRESH_PENDING'
export const STORY_DETAIL = 'story/STORY_DETAIL'
export const STORY_DETAIL_SUCCESS = 'story/STORY_DETAIL_SUCCESS'
export const STORY_DETAIL_ERROR = 'story/STORY_DETAIL_ERROR'
export const STORY_DETAIL_LOAD = 'story/STORY_DETAIL_LOAD'

// 获取最近story
export function storyList(data) {
  return {
    type: STORY_LIST,
    data
  }
}
export function storyListSuccess(data) {
  return {
    type: STORY_LIST_SUCCESS,
    data
  }
}
export function storyListError(data) {
  return {
    type: STORY_LIST_ERROR,
    data
  }
}

// 获取历史story
export function beforeListPending(data) {
  return {
    type: BEFORE_LIST_PENDING,
    data
  }
}
export function beforeList(data) {
  return {
    type: BEFORE_LIST,
    data
  }
}
export function beforeListSuccess(data) {
  return {
    type: BEFORE_LIST_SUCCESS,
    data
  }
}
export function beforeListError(data) {
  return {
    type: BEFORE_LIST_ERROR,
    data
  }
}
export function storyDateSuccess(data) {
  return {
    type: STORY_DATE_SUCCESS,
    data
  }
}

// 刷新story
export function storyRefresh(data) {
  return {
    type: STORY_REFRESH,
    data
  }
}
export function storyRefreshPending(data) {
  return {
    type: STORY_REFRESH_PENDING,
    data
  }
}

// 获取story详情
export function storyDetail(data) {
  return {
    type: STORY_DETAIL,
    data
  }
}
export function storyDetailSuccess(data) {
  return {
    type: STORY_DETAIL_SUCCESS,
    data
  }
}
export function storyDetailError(data) {
  return {
    type: STORY_DETAIL_ERROR,
    data
  }
}
export function storyDetailLoad(data) {
  return {
    type: STORY_DETAIL_LOAD,
    data
  }
}
