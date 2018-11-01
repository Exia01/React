/* Initial State that we will pass to the rootReducer */
const initState = {
  posts: [
    { id: '1', title: 'Testing post, post here, post there, post everywhere' },
    { id: '2', title: 'Testing Two, post here, post there, post everywhere' },
    { id: '3', title: 'Testing Three, post here, post there, post everywhere' }
  ]
};

/* creating the Reducer with the initial state */
const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
