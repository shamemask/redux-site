import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateEmployeeStart } from './employeeSlice';
import { useParams, useNavigate  } from 'react-router-dom';

function UpdateEmployee() {
  const navigate = useNavigate ();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [height, setHeight] = useState(0);
  const { id } = useParams();

  const employee = useSelector((state) =>
    state.employee.employees.find((employee) => employee.employeeId === +id)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (employee) {
      setFirstName(employee.firstName);
      setLastName(employee.lastName);
      setBirthday(employee.birthday);
      setHeight(employee.height);
    }
  }, [employee]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEmployee = {
      employeeId: employee.employeeId,
      firstName,
      lastName,
      birthday,
      height,
    };
    dispatch(updateEmployeeStart(updatedEmployee));
    navigate("/");
  };

  if (!employee) {
    return <p>Employee not found.</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
      <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      <button type="submit">Update Employee</button>
    </form>
  );
}

export default UpdateEmployee;