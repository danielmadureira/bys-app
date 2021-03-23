import { put, takeLatest } from "redux-saga/effects";
import { UserServices } from "../../services/UserServices";

const initialState = {
  id: null,
  name: "",
  profession: null,
  profile_picture: null,
  email: ""
}

/** Types */
export const types = {
  AUTHENTICATE_USER: '[User] Authenticate',
  UNAUTHENTICATE_USER: '[User] Unauthenticate',
  GET_USER: '[User] Get User',
  FETCH_USER: '[User] Fetch User'
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
    } catch (error) {
      console.log(error)
    }
  })

}