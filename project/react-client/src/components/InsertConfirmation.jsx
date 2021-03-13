import React from 'react';

const InsertConfirmation = ({ data}) => {
  return (
    <div>
      <p>
        {`MR${data.firstName}, welcome .`}
      </p>
    </div>
  );
};

export default InsertConfirmation;