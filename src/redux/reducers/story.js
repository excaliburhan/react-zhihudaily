import {
  STORY_LIST,
  STORY_LIST_SUCCESS,
  STORY_LIST_ERROR,
  STORY_DATE_SUCCESS,
  BEFORE_LIST,
  BEFORE_LIST_SUCCESS,
  BEFORE_LIST_ERROR,
  BEFORE_LIST_PENDING,
  STORY_REFRESH_PENDING,
  STORY_DETAIL,
  STORY_DETAIL_SUCCESS,
  STORY_DETAIL_ERROR,
  STORY_DETAIL_PENDING
} from '@/redux/actions/story'

const initState = {
  storyListParams: {},
  storyList: {
    stories: [],
    top_stories: []
  },
  storyListError: null,
  storyRefreshPending: false, // 是否下拉刷新
  beforeListParams: {},
  beforeList: [],
  beforeListError: null,
  storyDate: null, // 当前请求到的历史日期
  beforeListPending: false, // 历史请求中状态
  storyDetailParams: {},
  storyDetail: {},
  storyDetailError: null,
  storyDetailPending: false
}

export default function reducer(state = initState, action) {
  switch (action.type) {
    case STORY_LIST:
      return {
        ...state,
        storyListParams: action.data
      }
    case STORY_LIST_SUCCESS:
      return {
        ...state,
        storyList: action.data
      }
    case STORY_LIST_ERROR:
      return {
        ...state,
        storyListError: action.data
      }
    case STORY_DATE_SUCCESS:
      return {
        ...state,
        storyDate: action.data
      }
    case BEFORE_LIST:
      return {
        ...state,
        beforeListParams: action.data
      }
    case BEFORE_LIST_SUCCESS:
      return {
        ...state,
        beforeList: action.data
      }
    case BEFORE_LIST_ERROR:
      return {
        ...state,
        beforeListError: action.data
      }
    case BEFORE_LIST_PENDING:
      return {
        ...state,
        beforeListPending: action.data
      }
    case STORY_REFRESH_PENDING:
      return {
        ...state,
        storyRefreshPending: action.data
      }
    case STORY_DETAIL:
      return {
        ...state,
        storeDetailParams: action.data
      }
    case STORY_DETAIL_SUCCESS:
      return {
        ...state,
        storyDetail: action.data
      }
    case STORY_DETAIL_ERROR:
      return {
        ...state,
        storyDetailError: action.data
      }
    case STORY_DETAIL_PENDING:
      return {
        ...state,
        storyDetailPending: action.data
      }
    default:
      return state
  }
}
