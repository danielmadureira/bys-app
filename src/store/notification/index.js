import { put, takeLatest } from "redux-saga/effects";
import { ExpoNotificationAdapter } from "../../adapter/ExpoNotificationAdapter"

const initialState = {
  water_ingestion: {
    weight: null
  },
  medications: []
}

/** Types */
export const types = {
  CREATE_NOTIFICATION: '[Notification] Create',
  FETCH_NOTIFICATION: '[Notification] Fetch',
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
  fetchNotification: (notification) => ({
    type: types.FETCH_NOTIFICATION,
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
    case types.FETCH_NOTIFICATION: {
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

  yield takeLatest(types.CREATE_NOTIFICATION, function* createAlert(action) {
    let dados = action.payload
    let identificadores = []
    dados.days.map(async day => {
      let ift = await ExpoNotificationAdapter.schedule(dados.title, 0, ['10:00', '11:00'])
      identificadores.push(ift)
    })
    console.log(identificadores)
    yield dados.identificadores = identificadores

    yield put(actions.fetchNotification(dados))
  })

}