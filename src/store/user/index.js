import { put, takeLatest } from "redux-saga/effects";
import { UserServices } from "../../services/UserServices";

const initialState = {
  id: null,
  name: "",
  profession: null,
  profile_picture: null,
  email: "",
  mood: {},
  emoji: ''
}

/** Types */
export const types = {
  AUTHENTICATE_USER: '[User] Authenticate',
  UNAUTHENTICATE_USER: '[User] Unauthenticate',
  GET_USER: '[User] Get User',
  FETCH_USER: '[User] Fetch User',
  GET_USER_MOOD: '[User] Get User Mood',
  FETCH_USER_MOOD: '[User] Fetch User Mood',
  FETCH_USER_EMOJI: '[User] Fetch User Emoji',
  UPDATE_USER: '[User] Update User'
}

/** Actions */
export const actions = {
  getUser: (user) => ({
    type: types.GET_USER,
    payload: user
  }),
  fetchUser: (user) => ({
    type: types.FETCH_USER,
    payload: user
  }),
  fetchEmoji: (emoji) => ({
    type: types.FETCH_USER_EMOJI,
    payload: emoji
  }),
  getUserMood: (mood) => ({
    type: types.GET_USER_MOOD,
    payload: mood
  }),
  fetchUserMood: (mood) => ({
    type: types.FETCH_USER_MOOD,
    payload: mood
  }),
  updateProfile: (user) => ({
    type: types.UPDATE_USER,
    payload: user
  }),
  unauthenticate: () => ({
    type: types.UNAUTHENTICATE_USER
  })
}

/** Reducer */
export const reducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case types.FETCH_USER: {
      const {
        id,
        name,
        profession,
        profile_picture,
        email
      } = action.payload
      return {
        ...state,
        id,
        name,
        profession,
        profile_picture,
        email
      }
    }

    case types.FETCH_USER_MOOD: {
      const mood = action.payload
      return {
        ...state,
        mood: {
          description: mood.description,
          emoji_hex: mood.emoji_hex
        }
      }
    }

    case types.FETCH_USER_EMOJI: {
      const emoji_hex = action.payload
      return {
        ...state,
        emoji: emoji_hex
      }
    }

    case types.UNAUTHENTICATE_USER:
      return {}

    default:
      return state
  }
}

/** Saga */
export function* saga() {

  /**
  * Search informations of user
  */
  yield takeLatest(types.GET_USER, function* getUser(action) {
    const id = yield action.payload
    try {
      let data = yield UserServices.get(id)
      yield put(actions.fetchUser(data))
      yield put(actions.getUserMood())
    } catch (error) {
      console.log(error)
    }
  })

  /**
  * Search mood of user
  */
  yield takeLatest(types.GET_USER_MOOD, function* getUserMood() {
    try {
      let data = yield UserServices.getMood()
      yield put(actions.fetchUserMood(data))
    } catch (error) {
      console.log(error)
    }
  })

  /**
  * Update User
  */
  yield takeLatest(types.UPDATE_USER, function* updateProfile(action) {
    const form = action.payload
    try {
      // Update user
      if (form.name && form.profession) {
        let data = yield UserServices.update({
          name: form.name,
          profession: form.profession
        })
      }

      // Update profile picture
      if (form.image) {
        let data = yield UserServices.updateFile(
          form.image
        )
      }

      // Update user's mood
      if (form.status && form.emoticon) {
        let data = yield UserServices.updateMood({
          description: form.status,
          emoji_hex: String(form.emoticon)
        })
      }

      yield put(actions.getUser())
    } catch (error) {
      console.log(error)
    }
  })

}