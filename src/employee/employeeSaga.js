import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchEmployeesStart,
  fetchEmployeesSuccess,
  fetchEmployeesError,
  addEmployeeStart,
  addEmployeeSuccess,
  addEmployeeError,
  updateEmployeeStart,
  updateEmployeeSuccess,
  updateEmployeeError,
  deleteEmployeeStart,
  deleteEmployeeSuccess,
  deleteEmployeeError,
} from './employeeSlice';
import {
  fetchEmployeesApi,
  addEmployeeApi,
  updateEmployeeApi,
  deleteEmployeeApi,
} from './employeeApi';

function* fetchEmployees() {
  try {
    const employees = yield call(fetchEmployeesApi);
    yield put(fetchEmployeesSuccess(employees));
  } catch (error) {
    yield put(fetchEmployeesError(error.message));
  }
}

function* addEmployee(action) {
  try {
    const employee = yield call(addEmployeeApi, action.payload);
    yield put(addEmployeeSuccess(employee));
  } catch (error) {
    yield put(addEmployeeError(error.message));
  }
}

function* updateEmployee(action) {
  try {
    const employee = yield call(updateEmployeeApi, action.payload);
    yield put(updateEmployeeSuccess(employee));
  } catch (error) {
    yield put(updateEmployeeError(error.message));
  }
}
function* deleteEmployee(action) {
  try {
    yield call(deleteEmployeeApi, action.payload);
    yield put(deleteEmployeeSuccess(action.payload));
  } catch (error) {
    yield put(deleteEmployeeError(error.message));
  }
}

export default function* employeeSaga() {
  yield takeLatest(fetchEmployeesStart.type, fetchEmployees);
  yield takeLatest(addEmployeeStart.type, addEmployee);
  yield takeLatest(updateEmployeeStart.type, updateEmployee);
  yield takeLatest(deleteEmployeeStart.type, deleteEmployee);
}