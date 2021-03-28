import { put, takeLatest } from "redux-saga/effects";

const initialState = {
  water_ingestion: {
    weight: null
  },
  medications: []
}

/** Types */
export const types = {
  CREATE_NOTIFICATION: '[Notification] Create',
  UPDATE_NOTIFICATION: '[Notification] Update',
  ADD_HEIGHT: '[Notification] Add Weight',
  LOADER_NOTIFICATION: '[Notification] Loader'
}

/** Actions */
export const actions = {
  addNotification: (notification) => ({
    type: types.CREATE_NOTIFICATION,
    payload: notification
  }),
  isLoading: () => ({
    type: types.LOADER_NOTIFICATION,
  }),
  updateNotification: (notification) => ({
    type: types.UPDATE_NOTIFICATION,
    payload: notification
  }),
  addWeight: (weight) => ({
    type: types.ADD_HEIGHT,
    payload: weight
  })
}

/** Reducer */
export const reducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case types.CREATE_NOTIFICATION: {
      const notification = action.payload
      return {
        ...state,
        medications: [
          ...state.medications,
          notification
        ]
      }
    }

    case types.UPDATE_NOTIFICATION: {
      const notification = action.payload
      return {
        ...state,
        medications: notification
      }
    }

    case types.ADD_HEIGHT: {
      const weight = action.payload
      return {
        ...state,
        water_ingestion: {
          weight: weight
        }
      }
    }

    default:
      return state
  }
}

/** Saga */
export function* saga() {

  yield takeLatest(types.LOADER_NOTIFICATION, function* getUser() {
    put(actions.isLoading())
  })

}