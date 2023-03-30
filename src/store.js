import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux';
import employeeReducer from './employee/employeeSlice';
import employeeSaga from './employee/employeeSaga';

const rootReducer = combineReducers({
  employee: employeeReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(employeeSaga);

export default store;