import { put, select, takeLatest } from "redux-saga/effects";
import { MedicationAlertService } from "../../services/AlertService/MedicationAlertService";
import { WaterIngestionAlertService } from "../../services/AlertService/WaterIngestionAlertService";

const initialState = {
  water_ingestion: {
    weight: null,
    identifiers: []
  },
  medications: []
}

/** Types */
export const types = {
  CREATE_MEDICATION_ALERT: '[Notification] Create medication alert',
  FETCH_MEDICATION_ALERT: '[Notification] Fetch medication alert',
  DELETE_MEDICATION_ALERT: '[Notification] Delete medication alert',
  CREATE_WATER_ALERT: '[Notification] Create water alert',
  FETCH_WATER_ALERT: '[Notification] Fetch water alert',
  DELETE_WATER_ALERT: '[Notification] Delete water alert',
  UPDATE_NOTIFICATION: '[Notification] Update',
  ADD_HEIGHT: '[Notification] Add Weight'
}

/** Actions */
export const actions = {
  createMedicationAlert: (notification) => ({
    type: types.CREATE_MEDICATION_ALERT,
    payload: notification
  }),
  createWaterAlert: (notification) => ({
    type: types.CREATE_WATER_ALERT,
    payload: notification
  }),
  fetchMedicationAlert: (notification) => ({
    type: types.FETCH_MEDICATION_ALERT,
    payload: notification
  }),
  fetchWaterAlert: (notification) => ({
    type: types.FETCH_WATER_ALERT,
    payload: notification
  }),
  deleteMedicationAlert: (notification) => ({
    type: types.DELETE_MEDICATION_ALERT,
    payload: notification
  }),
  deleteWaterAlert: (notification) => ({
    type: types.DELETE_WATER_ALERT,
    payload: notification
  }),
  updateMedicationAlert: (notification) => ({
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
    case types.FETCH_MEDICATION_ALERT: {
      const notification = action.payload
      return {
        ...state,
        medications: [
          ...state.medications,
          notification
        ]
      }
    }

    case types.FETCH_WATER_ALERT: {
      const { weight, identifiers } = action.payload
      return {
        ...state,
        water_ingestion: {
          weight: weight,
          identifiers: identifiers
        }
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

export function* saga() {

  // CREATE MEDICATION ALERT
  yield takeLatest(types.CREATE_MEDICATION_ALERT, function* createMedicationsAlert(action) {
    let alerts = action.payload
    const AlertService = new MedicationAlertService()

    alerts.identifiers = yield AlertService.register(
      alerts.title,
      alerts.days,
      alerts.hours
    )

    yield put(actions.fetchMedicationAlert(alerts))
  })

  // DELETE MEDICATION ALERT
  yield takeLatest(types.DELETE_MEDICATION_ALERT, function* deleteMedication(action) {
    let uuid = action.payload
    let medications = yield select(state => state.notifications.medications)

    let alerts = medications.filter(res =>
      res.uuid === uuid
    )

    const AlertService = new MedicationAlertService()
    yield AlertService.cancel(alerts[0].identifiers)

    let deleted = medications.filter(res =>
      res.uuid !== uuid
    )

    yield put(actions.updateMedicationAlert(deleted))
  })

  // CREATE WATER ALERT
  yield takeLatest(types.CREATE_WATER_ALERT, function* createWatersAlert(action) {
    let weight = action.payload
    let { identifiers } = yield select(state => state.notifications.water_ingestion)

    const AlertService = new WaterIngestionAlertService()

    if (identifiers.length > 0) {
      yield AlertService.cancel(identifiers)
      identifiers = []
    }

    identifiers = yield AlertService.register(weight)
    yield put(actions.fetchWaterAlert({
      weight,
      identifiers
    }))
  })

  // DELETE WATER ALERT
  yield takeLatest(types.DELETE_WATER_ALERT, function* deleteWaterAlert() {
    let weight = ''
    let { identifiers } = yield select(state => state.notifications.water_ingestion)

    const AlertService = new WaterIngestionAlertService()
    yield AlertService.cancel(identifiers)
    identifiers = []

    yield put(actions.fetchWaterAlert({
      weight,
      identifiers: []
    }))
  })
}