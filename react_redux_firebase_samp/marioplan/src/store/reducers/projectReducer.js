const initState = {
  projects: [ //properties
    {id: '1', title: 'help me find peach', content: 'blah blah blah'},
    {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
    {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
  ]
}


//takes in action, performs switch case. 
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    //checking action and using the function from projectActions
    case 'CREATE_PROJECT':
      console.log('create project', action.project);
  }
  return state;
};

export default projectReducer;