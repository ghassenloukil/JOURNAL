import React from 'react';

const InsertConfirmation = ({ user }) => {
  return (
    <div>
      <p>
        {`hello${user.firstName},  ${user.lastName} you are now on the list.
        We\'ll send you an email confirmation to ${user.email}.`}
      </p>
    </div>
  );
};

export default InsertConfirmation;