import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployeeStart } from './employeeSlice';
import { useNavigate  } from 'react-router-dom';

function AddEmployee() {
  const navigate = useNavigate ();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [height, setHeight] = useState(0);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      firstName,
      lastName,
      birthday,
      height,
    };
    dispatch(addEmployeeStart(newEmployee));
    setFirstName('');
    setLastName('');
    setBirthday('');
    setHeight(0);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={firstName} placeholder="firstName" onChange={(e) => setFirstName(e.target.value)} />
      <input type="text" value={lastName} placeholder="lastName" onChange={(e) => setLastName(e.target.value)} />
      <input type="date" value={birthday} placeholder="birthday" onChange={(e) => setBirthday(e.target.value)} />
      <input type="number" value={height} placeholder="height" onChange={(e) => setHeight(e.target.value)} />
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default AddEmployee;