import axios from 'axios';

const API_URL = 'https://reactapi.bsite.net/api/Employee';

export const fetchEmployeesApi = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error){
    throw new Error(error.response.data);
  }
};

export const addEmployeeApi = async (employee) => {
  try {
    const response = await axios.post(API_URL, employee);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

export const updateEmployeeApi = async (employee) => {
  const url = `${API_URL}/${employee.employeeId}`;
  try {
    const response = await axios.put(url, employee);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

export const deleteEmployeeApi = async (employeeId) => {
  const url = `${API_URL}/${employeeId}`;
  try {
    await axios.delete(url);
  } catch (error) {
    throw new Error(error.response.data);
  }
};