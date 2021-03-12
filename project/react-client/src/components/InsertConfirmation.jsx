import React from 'react';

const InsertConfirmation = ({ journal }) => {
  return (
    <div>
      <p>
        {`MR${journal.firstName}, welcome .`}
      </p>
    </div>
  );
};

export default InsertConfirmation;