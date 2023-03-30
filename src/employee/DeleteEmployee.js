import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEmployeeStart } from './employeeSlice';
import { useParams, useNavigate  } from 'react-router-dom';

function DeleteEmployee() {
  const { id } = useParams();
  const employee = useSelector((state) =>
    state.employee.employees.find((employee) => employee.employeeId === +id)
  );
  const isLoading = useSelector((state) => state.employee.isLoading);
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleDelete = () => {
    dispatch(deleteEmployeeStart(employee.employeeId));
    history('/');
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!employee) {
    return <p>Employee not found.</p>;
  }

  return (
    <div>
      <p>Are you sure you want to delete {employee.firstName} {employee.lastName}?</p>
      <button onClick={handleDelete}>Delete Employee</button>
    </div>
  );
}

export default DeleteEmployee;