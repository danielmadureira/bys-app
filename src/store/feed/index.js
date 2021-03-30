import { delay, put, takeLatest } from 'redux-saga/effects'
import { FeedServices } from '../../services/FeedServices'
import { UserServices } from '../../services/UserServices'

const initialState = {
  details: {},
  news: {
    data: []
  },
  isLoading: true,
  isLoadingDetails: true
}

export const types = {
  GET_ALL_FEED: '[Feed] Get all feed',
  FETCH_ALL_FEED: '[Feed] Fetch all feed',
  GET_FEED_DETAILS: '[Feed] Get feed details',
  FETCH_FEED_DETAILS: '[Feed] Fetch feed details',
  GET_FEED_AUTHOR: '[Feed] Get feed author',
  FETCH_FEED_AUTHOR: '[Feed] Fetch feed author',
  FEED_LOADING: '[Feed] Loading',
  FEED_LOADING_DETAILS: '[Feed] Loading details'
}

export const actions = {
  getAllFeed: (feed) => ({
    type: types.GET_ALL_FEED,
    payload: feed
  }),
  fetchAllFeed: (feed) => ({
    type: types.FETCH_ALL_FEED,
    payload: feed
  }),
  getFeedById: (feed) => ({
    type: types.GET_FEED_DETAILS,
    payload: feed
  }),
  fetchFeedById: (feed) => ({
    type: types.FETCH_FEED_DETAILS,
    payload: feed
  }),
  getAuthorById: (author) => ({
    type: types.GET_FEED_AUTHOR,
    payload: author
  }),
  fetchAuthorById: (author) => ({
    type: types.FETCH_FEED_AUTHOR,
    payload: author
  }),
  isLoading: (loading) => ({
    type: types.FEED_LOADING,
    payload: loading
  }),
  isLoadingDetails: (loading) => ({
    type: types.FEED_LOADING_DETAILS,
    payload: loading
  })
}

export const reducer = (
  state = initialState,
  action
) => {

  switch (action.type) {
    case types.FETCH_ALL_FEED: {
      const feed = action.payload
      let { news: { data } } = state
      let oldData = data.concat(feed.data)

      return {
        ...state,
        news: {
          ...feed,
          data: oldData
        }
      }
    }

    case types.FETCH_FEED_DETAILS: {
      const details = action.payload
      return {
        ...state,
        details: details
      }
    }

    case types.FETCH_FEED_AUTHOR: {
      const author = action.payload
      return {
        ...state,
        details: {
          ...state.details,
          author: author.name
        }
      }
    }

    case types.FEED_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      }
    }

    case types.FEED_LOADING_DETAILS: {
      return {
        ...state,
        isLoadingDetails: action.payload
      }
    }

    default:
      return state
  }

}

export function* saga() {

  yield takeLatest(types.GET_ALL_FEED, function* getAllFeed(action) {
    const page = action.payload
    try {
      const dados = yield FeedServices.getAll(page)
      yield put(actions.fetchAllFeed(dados))
      yield delay(1500)
      yield put(actions.isLoading(false))
    } catch (error) {
      console.log(error)
    }
  })

  yield takeLatest(types.GET_FEED_DETAILS, function* getFeedDetails(action) {
    const id = yield action.payload
    try {
      let data = yield FeedServices.getById(id)
      const author = yield UserServices.get(id)
      yield data.author = author.name

      yield put(actions.fetchFeedById(data))
      yield put(actions.isLoadingDetails(false))
    } catch (error) {
      console.log(error)
    }
  })
}