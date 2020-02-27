import React from 'react';

const User = ({ username, fullname }) => (
    <span>@{username} {fullname}</span>
);

export default User;