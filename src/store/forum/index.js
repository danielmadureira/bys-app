import { put, takeLatest } from 'redux-saga/effects'
import { addLikeToComment, formatForumGroups, formatRoomComments } from '../../helpers/forumHelpers'
import { ForumServices } from '../../services/ForumServices'
import { UserServices } from '../../services/UserServices'

const initialState = {
  groups: {},
  comments: [],
  isLoading: true,
  isCommentLoading: true
}

export const types = {
  GET_FORUM_GROUPS: '[Forum] Get all groups',
  FETCH_FORUM_GROUPS: '[Forum] Fetch all groups',
  GET_FORUM_COMMENT: '[Forum] Get all comments',
  FETCH_FORUM_COMMENT: '[Forum] Fetch all comments',
  FORUM_LOADING: '[Forum] Loading',
  FORUM_COMMENT_LOADING: '[Forum] Loading Comment',
  FORUM_LIKE_COMMENT: '[Forum] Like Comment',
  FORUM_SEND_LIKE_COMMENT: '[Forum] Send Like Comment'
}

export const actions = {
  getAllForumGroups: (forum) => ({
    type: types.GET_FORUM_GROUPS
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
  })
}

export const reducer = (
  state = initialState,
  action
) => {

  switch (action.type) {
    case types.FETCH_FORUM_GROUPS: {
      const data = action.payload
      return {
        ...state,
        groups: data
      }
    }

    case types.FETCH_FORUM_COMMENT: {
      const data = action.payload
      return {
        ...state,
        comments: data
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
      const comments = addLikeToComment(
        state.comments,
        action.payload
      )
      console.log(comments)
      return {
        ...state,
        comments: comments
      }
    }

    default:
      return state
  }

}

export function* saga() {

  yield takeLatest(types.GET_FORUM_GROUPS, function* getAllGroups() {
    try {
      let forum = []
      const { data } = yield ForumServices.getAllGroups()

      if (data) {
        forum = yield formatForumGroups(data)
        forum.map(async (forum) => {
          forum.data = await ForumServices.getRoomsByGroup(forum.id)
          return forum
        })
      }
      yield put(actions.fetchAllForumGroups(forum))
      yield put(actions.isLoading(false))
    } catch (error) {
      console.log(error)
    }
  })

  yield takeLatest(types.GET_FORUM_COMMENT, function* getAllComments(action) {
    const id = action.payload
    try {
      let newComments = []
      const { data } = yield ForumServices.getCommentsByRoom(id)
      if (data) {
        let comments = yield formatRoomComments(data)
        for (let index = 0; index < comments.length; index++) {
          let user = yield UserServices.getById(comments[index].created_by)

          newComments.push({
            ...comments[index],
            name: user.name,
            profile_picture: user.profile_picture,
            profession: user.profession
          })
        }
        yield put(actions.fetchAllForumComments(newComments))
      }
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
}