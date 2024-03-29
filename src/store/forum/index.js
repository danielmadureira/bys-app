import { put, takeLatest } from 'redux-saga/effects'
import { ForumHelpers } from '../../helpers/forumHelpers'
import { ForumServices } from '../../services/ForumServices'

const initialState = {
  groups: {},
  comments: [],
  isLoading: true,
  isCommentLoading: true,
  isSend: false
}

export const types = {
  GET_FORUM_GROUPS: '[Forum] Get all groups',
  FETCH_FORUM_GROUPS: '[Forum] Fetch all groups',
  GET_FORUM_COMMENT: '[Forum] Get all comments',
  FETCH_FORUM_COMMENT: '[Forum] Fetch all comments',
  FORUM_LOADING: '[Forum] Loading',
  FORUM_COMMENT_LOADING: '[Forum] Loading Comment',
  FORUM_LIKE_COMMENT: '[Forum] Like Comment',
  FORUM_SEND_LIKE_COMMENT: '[Forum] Send Like Comment',
  FORUM_ADD_COMMENT: '[Forum] Add a comment',
  COMMENT_IS_SEND: '[Forum] Send comment'
}

export const actions = {
  getAllForumGroups: (forum) => ({
    type: types.GET_FORUM_GROUPS,
    payload: forum
  }),
  fetchAllForumGroups: (forum) => ({
    type: types.FETCH_FORUM_GROUPS,
    payload: forum
  }),
  getAllForumComments: (forum) => ({
    type: types.GET_FORUM_COMMENT,
    payload: forum
  }),
  fetchAllForumComments: (forum) => ({
    type: types.FETCH_FORUM_COMMENT,
    payload: forum
  }),
  isLoading: (loading) => ({
    type: types.FORUM_LOADING,
    payload: loading
  }),
  isCommentLoading: (loading) => ({
    type: types.FORUM_COMMENT_LOADING,
    payload: loading
  }),
  addLike: (like) => ({
    type: types.FORUM_LIKE_COMMENT,
    payload: like
  }),
  sendLike: (like) => ({
    type: types.FORUM_SEND_LIKE_COMMENT,
    payload: like
  }),
  addComment: (comment) => ({
    type: types.FORUM_ADD_COMMENT,
    payload: comment
  }),
  isSend: (send) => ({
    type: types.COMMENT_IS_SEND,
    payload: send
  })
}

export const reducer = (
  state = initialState,
  action
) => {

  switch (action.type) {
    case types.FETCH_FORUM_GROUPS: {
      const { dados, page } = action.payload

      let concated = (state.groups.data && page !== 1) ?
        state.groups.data.concat(dados.data) : dados.data

      return {
        ...state,
        groups: {
          current_page: dados.current_page,
          last_page: dados.last_page,
          data: concated
        }
      }
    }

    case types.FETCH_FORUM_COMMENT: {
      const { data, page } = action.payload
      let newData = ForumHelpers.formatRoomComments(data.data)

      let concated = (state.comments.data && page !== 1) ?
        state.comments.data.concat(newData) : newData

      return {
        ...state,
        comments: {
          current_page: data.current_page,
          last_page: data.last_page,
          data: concated
        }
      }
    }

    case types.FORUM_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      }
    }

    case types.FORUM_COMMENT_LOADING: {
      return {
        ...state,
        isCommentLoading: action.payload
      }
    }

    case types.FORUM_LIKE_COMMENT: {
      const comment = ForumHelpers.addLikeToComment(
        state.comments.data,
        action.payload
      )
      return {
        ...state,
        comments: {
          ...state.comments,
          data: comment
        }
      }
    }

    case types.COMMENT_IS_SEND: {
      return {
        ...state,
        isSend: action.payload
      }
    }

    default:
      return state
  }

}

export function* saga() {

  yield takeLatest(types.GET_FORUM_GROUPS, function* getAllGroups(action) {
    try {
      const page = action.payload
      const dados = yield ForumServices.getAllGroups(page)
      yield put(actions.fetchAllForumGroups({ dados, page }))
      yield put(actions.isLoading(false))
    } catch (error) {
      console.log(error)
    }
  })

  yield takeLatest(types.GET_FORUM_COMMENT, function* getAllComments(action) {
    const { id, page } = action.payload
    try {
      const data = yield ForumServices.getCommentsByRoom(id, page)
      yield put(actions.fetchAllForumComments({ data, page }))
      yield put(actions.isCommentLoading(false))

    } catch (error) {
      console.log(error)
    }
  })

  yield takeLatest(types.FORUM_SEND_LIKE_COMMENT, function* sendLike(action) {
    const id = action.payload
    yield put(actions.addLike(id))

    yield ForumServices.addLikeToComment(id)
      .then(res => {
        return res.data
      })
      .catch(async (err) => {
        await ForumServices.removeLikeToComment(id)
      })
  })

  yield takeLatest(types.FORUM_ADD_COMMENT, function* sendComment(action) {
    try {
      const form = action.payload
      yield ForumServices.addComment(form)
      yield put(actions.isSend(true))
    } catch (error) {
      console.log(error)
    }
  })
}