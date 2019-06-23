/* Initial State that we will pass to the rootReducer */
import axios from 'axios'
const initState = {
  posts: [
    { id: '1', title: 'Testing post, post here, post there, post everywhere' },
    { id: '2', title: 'Testing Two, post here, post there, post everywhere' },
    { id: '3', title: 'Testing Three, post here, post there, post everywhere' }
  ]
};
console.log(initState.posts)

axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
          /* only taking in the first 10 posts */
          // posts: res.data.slice(0, 10)
        for (let article of res.data) {
         initState.posts.push(article)
        }
      })
      .catch(res => {
        console.log(res);
      });

console.log(initState.posts)

/* creating the Reducer with the initial state */
const rootReducer = (state = initState, action) => {
  /* Checks for delete action coming from post */
  if (action.type === 'DELETE_POST') {
    /* Create a new state and manipulate in a non destructing way */
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id
      /* want to return true if this checks for things not being the same */
    })
    return {
       /* Spread so that all properties are inside the state */
      ...state,
      posts:newPosts

    }
      
  }
  return state;
};

export default rootReducer;
