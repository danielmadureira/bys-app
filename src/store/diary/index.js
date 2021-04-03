import { put, takeLatest } from 'redux-saga/effects'
import { DiaryServices } from '../../services/DiaryServices'

const initialState = {
  title: '',
  text: '',
  allTexts: {},
  item: {},
  isLoading: true,
  hasError: false
}

export const types = {
  WRITE_DIARY: '[Diary] New diary',
  SAVE_DIARY: '[Diary] Save diary',
  GET_ALL_DIARY: '[Diary] Get all diary',
  FETCH_ALL_DIARY: '[Diary] Fetch all diary',
  GET_DIARY_DETAILS: '[Diary] Get diary',
  FETCH_DIARY_DETAILS: '[Diary] Fetch diary',
  LOADER_DIARY: '[Diary] Loader',
  DIARY_HAS_ERRORS: '[Diary] Load Errors',
  DIARY_IS_SEND: '[Diary] Send',
}

export const actions = {
  writeDiary: (diary) => ({
    type: types.WRITE_DIARY,
    payload: diary
  }),
  getAllDiary: (diary) => ({
    type: types.GET_ALL_DIARY,
    payload: diary
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
  hasError: (send) => ({
    type: types.DIARY_HAS_ERRORS,
    payload: send
  }),
  isSend: (send) => ({
    type: types.DIARY_IS_SEND,
    payload: send
  })
}

export const reducer = (
  state = initialState,
  action
) => {

  switch (action.type) {
    case types.FETCH_ALL_DIARY: {
      const { dados, page } = action.payload
      let concated = (state.allTexts.data && page !== 1) ?
        state.allTexts.data.concat(dados.data) : dados.data

      return {
        ...state,
        allTexts: {
          current_page: dados.current_page,
          last_page: dados.last_page,
          data: concated
        }
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

    case types.DIARY_HAS_ERRORS: {
      const error = action.payload
      return {
        ...state,
        hasError: error
      }
    }

    case types.DIARY_IS_SEND: {
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
      const data = yield DiaryServices.create(form)
      if (data) {
        yield put(actions.hasError(data.errors.title[0]))
      } else {
        yield put(actions.isSend(true))
      }
    } catch (error) {
      console.log(error)
    }
  })

  yield takeLatest(types.GET_ALL_DIARY, function* fetchAllDiary(action) {
    const page = action.payload
    try {
      const data = yield DiaryServices.getAll(page)
      yield put(actions.fetchAllDiary({ dados: data, page }))
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