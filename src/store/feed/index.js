import { put, takeLatest } from 'redux-saga/effects'
import { FeedServices } from '../../services/FeedServices'
import { UserServices } from '../../services/UserServices'

const initialState = {
  details: {},
  data: [],
  isLoading: true
}

export const types = {
  GET_ALL_FEED: '[Feed] Get all feed',
  FETCH_ALL_FEED: '[Feed] Fetch all feed',
  GET_FEED_DETAILS: '[Feed] Get feed details',
  FETCH_FEED_DETAILS: '[Feed] Fetch feed details',
  GET_FEED_AUTHOR: '[Feed] Get feed author',
  FETCH_FEED_AUTHOR: '[Feed] Fetch feed author',
  FEED_LOADING: "[Feed] Loading"
}

export const actions = {
  getAllFeed: (feed) => ({
    type: types.GET_ALL_FEED
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
  })
}

export const reducer = (
  state = initialState,
  action
) => {

  switch (action.type) {
    case types.FETCH_ALL_FEED: {
      const data = action.payload
      return {
        ...state,
        data: data
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
  
    default:
      return state
  }

}

export function* saga() {

  yield takeLatest(types.GET_ALL_FEED, function* getAllFeed() {
    try {
      const { data } = yield FeedServices.getAll()
      yield put(actions.fetchAllFeed(data))
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
    } catch (error) {
      console.log(error)
    }
  })
}