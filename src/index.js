import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import appReducer from './reducers';
import { createUser, createPost } from './actions';

let store = createStore(appReducer);

// create users
store.dispatch(createUser('test1', 'Testing Person 1'));
store.dispatch(createUser('test2', 'Testing Person 2'));

// create posts
store.dispatch(createPost('test1', {
    title: 'First post',
    text: 'Hello world',
    category: 'welcome'
}));
store.dispatch(createPost('test2', {
    title: 'Second post',
    text: 'Hello world',
    category: 'welcome'
}));

console.log('initial state:', store.getState())
store.subscribe(() =>
  console.log('state changed:', store.getState())
)


// setTimeout(() => store.dispatch(createPost('test2', 'another post')), 1000);

// const posts = [
//     { user: 'test1', text: 'Hello, world' },
//     { user: 'test2', text: 'Another post' }
// ]

// ReactDOM.render(
//     <ConnectedPostList store={store} />,
//     document.getElementById("root")
// );