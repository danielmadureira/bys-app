import { put, takeLatest } from "redux-saga/effects";
import { encryptPassword } from "../../helpers/registerHelper";
import { UserServices } from "../../services/UserServices";

const initialState = {
  name: "",
  profession: null,
  profile_picture: null,
  email: "",
  password: "",
  isLoading: true,
}

/** Types */
export const types = {
  REGISTER_STEP_ONE: "[Register] User's Personal Information",
  REGISTER_STEP_TWO: "[Register] User's Password",
  REGISTER_LOADING: "[Register] Loading"
} 

/** Actions */
export const actions = {
  registerStepOne: (user) => ({
    type: types.REGISTER_STEP_ONE,
    payload: user
  }),
  registerStepTwo: (user) => ({
    type: types.REGISTER_STEP_TWO,
    payload: user
  }),
  isLoading: (user) => ({
    type: types.REGISTER_LOADING,
    payload: user
  })
}

/** Reducer */
export const reducer = (
  state = initialState, 
  action
) => {
  switch (action.type) {
    case types.REGISTER_STEP_ONE: {
      return {
        ...state,
        ...action.payload
      }
    }

    case types.REGISTER_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      }
    }
    
    default:
      return state
  }
}

/** Saga */
export function* saga() {
  /**
  * Search informations of user
  */
  yield takeLatest(types.REGISTER_STEP_TWO, function* registerStepTwo(action) {
    let form = yield action.payload
    form.password = encryptPassword(form.password)

    try {
      yield UserServices.create(form)
      yield put(actions.isLoading(false))
    } catch (error) {
      console.log(error)
    }
  })
}