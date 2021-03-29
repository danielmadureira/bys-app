import { put, takeLatest } from 'redux-saga/effects'
import { DiaryServices } from '../../services/DiaryServices'

const initialState = {
  title: '',
  text: '',
  allTexts: {},
  item: {},
  isLoading: true,
  isSend: false
}

export const types = {
  WRITE_DIARY: '[Diary] New diary',
  SAVE_DIARY: '[Diary] Save diary',
  GET_ALL_DIARY: '[Diary] Get all diary',
  FETCH_ALL_DIARY: '[Diary] Fetch all diary',
  GET_DIARY_DETAILS: '[Diary] Get diary',
  FETCH_DIARY_DETAILS: '[Diary] Fetch diary',
  LOADER_DIARY: '[Diary] Loader',
  DIARY_IS_SENDED: '[Diary] Send',
}

export const actions = {
  writeDiary: (diary) => ({
    type: types.WRITE_DIARY,
    payload: diary
  }),
  getAllDiary: (diary) => ({
    type: types.GET_ALL_DIARY
  }),
  fetchAllDiary: (diary) => ({
    type: types.FETCH_ALL_DIARY,
    payload: diary
  }),
  getDiary: (diary) => ({
    type: types.GET_DIARY_DETAILS,
    payload: diary
  }),
  fetchDiary: (diary) => ({
    type: types.FETCH_DIARY_DETAILS,
    payload: diary
  }),
  isLoading: (loading) => ({
    type: types.LOADER_DIARY,
    payload: loading
  }),
  isSend: (send) => ({
    type: types.DIARY_IS_SENDED,
    payload: send
  })
}

export const reducer = (
  state = initialState,
  action
) => {

  switch (action.type) {
    case types.FETCH_ALL_DIARY: {
      const data = action.payload
      return {
        ...state,
        allTexts: data
      }
    }

    case types.FETCH_DIARY_DETAILS: {
      const data = action.payload
      return {
        ...state,
        item: data
      }
    }

    case types.LOADER_DIARY: {
      const loading = action.payload
      return {
        ...state,
        isLoading: loading
      }
    }

    case types.DIARY_IS_SENDED: {
      const send = action.payload
      return {
        ...state,
        isSend: send
      }
    }

    default:
      return state
  }

}

export function* saga() {

  yield takeLatest(types.WRITE_DIARY, function* writeDiary(action) {
    let form = yield action.payload

    try {
      yield DiaryServices.create(form)
      yield put(actions.isSend(true))
    } catch (error) {
      console.log(error)
    }
  })

  yield takeLatest(types.GET_ALL_DIARY, function* fetchAllDiary() {
    try {
      const data = yield DiaryServices.getAll()
      yield put(actions.fetchAllDiary(data))
      yield put(actions.isLoading(false))
    } catch (error) {
      console.log(error)
    }
  })

  yield takeLatest(types.GET_DIARY_DETAILS, function* getDiary(action) {
    const id = yield action.payload
    try {
      let data = yield DiaryServices.getById(id)
      yield put(actions.fetchDiary(data))
    } catch (error) {
      console.log(error)
    }
  })
}