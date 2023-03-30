import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    employees: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchEmployeesStart(state) {
      state.isLoading = true;
    },
    fetchEmployeesSuccess(state, action) {
      state.isLoading = false;
      state.employees = action.payload;
    },
    fetchEmployeesError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addEmployeeStart(state) {
      state.isLoading = true;
    },
    addEmployeeSuccess(state, action) {
      state.isLoading = false;
      state.employees.push(action.payload);
    },
    addEmployeeError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    updateEmployeeStart(state) {
      state.isLoading = true;
    },
    updateEmployeeSuccess(state, action) {
      const index = state.employees.findIndex(
        (employee) => employee.employeeId === action.payload.employeeId
      );
      if (index !== -1) {
        state.isLoading = false;
        state.employees[index] = action.payload;
      }
    },
    updateEmployeeError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    deleteEmployeeStart(state) {
      state.isLoading = true;
    },
    deleteEmployeeSuccess(state, action) {
      state.isLoading = false;
      state.employees = state.employees.filter(
        (employee) => employee.employeeId !== action.payload
      );
    },
    deleteEmployeeError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
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
} = employeeSlice.actions;

export default employeeSlice.reducer;