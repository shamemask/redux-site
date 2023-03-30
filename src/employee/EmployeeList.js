
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchEmployeesStart,
  deleteEmployeeStart,
} from './employeeSlice';
import { Link } from 'react-router-dom';

function EmployeeList() {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const employees = useSelector((state) => state.employee.employees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployeesStart());
  }, [dispatch]);

  const handleDelete = (employeeId) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      dispatch(deleteEmployeeStart(employeeId));
    }
  };

  const handleSort = (columnName) => {
    if (sortColumn === columnName) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(columnName);
      setSortOrder('asc');
    }
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedEmployees = filteredEmployees.sort((a, b) => {
    if (!sortColumn || !sortOrder) {
      return 0;
    }
    const aValue = a[sortColumn];
    const bValue = b[sortColumn];
    if (aValue < bValue) {
      return sortOrder === 'asc' ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortOrder === 'asc' ? 1 : -1;
    }
    return 0;
  });

  return (
    <div>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search by name" />
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('firstName')}>
              First Name{' '}
              {sortColumn === 'firstName' &&
                (sortOrder === 'asc' ? '↑' : '')}
            </th>
            <th onClick={() => handleSort('lastName')}>
              Last Name{' '}
              {sortColumn === 'lastName' &&
                (sortOrder === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('birthday')}>
              Birthday{' '}
              {sortColumn === 'birthday' &&
                (sortOrder === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('height')}>
              Height{' '}
              {sortColumn === 'height' &&
                (sortOrder === 'asc' ? '↑' : '↓')}
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedEmployees.map((employee) => (
            <tr key={employee.employeeId}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{new Date(employee.birthday).toLocaleDateString()}</td>
              <td>{employee.height}</td>
              <td>
                <Link to={`/update/${employee.employeeId}`}>Edit</Link>{' '}
                <button onClick={() => handleDelete(employee.employeeId)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/add">Add Employee</Link>
    </div>
  );
}

export default EmployeeList;