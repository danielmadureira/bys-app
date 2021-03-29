import { put, takeLatest } from "redux-saga/effects";
import { encryptPassword } from "../../helpers/registerHelper";
import { UserServices } from "../../services/UserServices";

const initialState = {
  name: "",
  profession: null,
  profile_picture: null,
  email: "",
  password: "",
  isLoading: false,
  error: null
}

/** Types */
export const types = {
  REGISTER_STEP_ONE: "[Register] User's Personal Information",
  REGISTER_STEP_TWO: "[Register] User's Password",
  REGISTER_LOADING: "[Register] Loading",
  REGISTER_LOAD_ERROR: "[Register] Loading error",
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
  }),
  loadErrors: (error) => ({
    type: types.REGISTER_LOAD_ERROR,
    payload: error
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

    case types.REGISTER_LOAD_ERROR: {
      return {
        ...state,
        error: action.payload
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
      const data = yield UserServices.create(form)
      if (data) {
        yield put(actions.loadErrors(data.message))
      } else {
        yield put(actions.isLoading(true))
      }
    } catch (error) {
      console.log(error)
    }
  })
}