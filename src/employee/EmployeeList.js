import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEmployeesStart } from './employeeSlice';
import { Link } from 'react-router-dom';

function EmployeeList() {
  const employees = useSelector((state) => state.employee.employees);
  const isLoading = useSelector((state) => state.employee.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployeesStart());
  }, [dispatch]);

  return (
    <div>
      <h1>Employee List</h1>
      {isLoading && <p>Loading...</p>}
      <ul>
        {employees.map((employee) => (
          <li key={employee.employeeId}>
            <Link to={`/update/${employee.employeeId}`}>
              {employee.firstName} {employee.lastName}
            </Link>
            {' | '}
            <Link to={`/delete/${employee.employeeId}`}>Delete</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;