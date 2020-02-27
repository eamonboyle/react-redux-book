import { CREATE_USER } from '../actionTypes';

export const createUser = (username, fullname) => {
    return {
        type: CREATE_USER,
        username,
        fullname
    };
};