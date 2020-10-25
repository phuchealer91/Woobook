import {
  call,
  delay,
  put,
  take,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects'
import { hideLoading, showLoading } from '../actions/ui'
import {
  currentAdminFailed,
  currentAdminSuccess,
  currentUserFailed,
  currentUserSuccess,
  loginInUserFailed,
  loginInUserSuccess,
  registerOrUpdateUser,
  registerOrUpdateUserFailed,
  registerOrUpdateUserSuccess,
} from '../actions/users'
import { TOKEN } from '../constants/keys'
import {
  currentAdmins,
  currentUsers,
  registerOrUpdateUsers,
} from '../../apis/auth'
import * as types from '../constants/users'

function* LoggedUser({ payload }) {
  const { token } = payload
  window.localStorage.setItem(TOKEN, token)

  try {
    yield put(showLoading())
    const resp = yield call(registerOrUpdateUsers, token)
    // yield take(types.LOGGIN_IN_USER)
    const data = { ...resp.data, token }
    // const { payload } = resp
    yield put(registerOrUpdateUserSuccess(data))
  } catch (error) {
    yield put(registerOrUpdateUserFailed(error))
  }
  yield delay(400)
  yield put(hideLoading())
}
// function* registerOrUpdate({ payload }) {
//   window.localStorage.setItem(TOKEN, payload)
//   try {
//     const resp = yield call(registerOrUpdateUsers, payload)
//     const { data } = resp
//     yield put(registerOrUpdateUserSuccess(data))
//   } catch (error) {
//     yield put(registerOrUpdateUserFailed(error))
//   }
// }

function* currentUser({ payload }) {
  const { token } = payload
  window.localStorage.setItem(TOKEN, token)
  try {
    const resp = yield call(currentUsers, token)
    // const { data } = resp
    const data = { ...resp.data, token }
    yield put(currentUserSuccess(data))
  } catch (error) {
    yield put(currentUserFailed(error))
  }
}

function* currentAdmin({ payload }) {
  console.log(payload)
  window.localStorage.setItem(TOKEN, payload)
  try {
    const resp = yield call(currentAdmins, payload)
    const { data } = resp
    console.log(resp)
    yield put(currentAdminSuccess(data))
  } catch (error) {
    yield put(currentAdminFailed(error))
  }
}
// function* flogout() {
//   localStorage.removeItem(TOKEN)
// }
// export function* watchLogout() {
//   yield takeEvery(types.LOGOUT_IN_USER, flogout)
// }
export function* watchLoggedUser() {
  yield takeEvery(types.CREATE_OR_UPDATE_USER, LoggedUser)
  yield takeEvery(types.CURRENT_USER, currentUser)
  yield takeLatest(types.CURRENT_ADMIN, currentAdmin)
}
// export function* watchRegisterOrUpdateUser() {
//   // yield takeEvery(types.CREATE_OR_UPDATE_USER, registerOrUpdate)
// }
