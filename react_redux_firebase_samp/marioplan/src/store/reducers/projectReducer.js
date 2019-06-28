const initState = {
  projects: [ //properties
    {id: '1', title: 'help me find peach', content: 'blah blah blah'},
    {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
    {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
  ]
}


//takes in action, performs switch case. 
const projectReducer = (state = initState, action) => {
  //checking action and using the function from projectActions
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('create project success');
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error');
      return state;
    default:
      return state;
  }
};

export default projectReducer;