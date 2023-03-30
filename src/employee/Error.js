import React from 'react';
import { useSelector } from 'react-redux';

function Error() {
  const error = useSelector((state) => state.employee.error);

  return (
    <div>
      {error && (
        <p>Oops! Something went wrong: {error}. Please try again later.</p>
      )}
    </div>
  );
}

export default Error;