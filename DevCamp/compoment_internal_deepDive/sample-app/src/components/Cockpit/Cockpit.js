import React, { useEffect } from 'react';
//useEffect is the second most important hook you can use next to useState
//useEffect //combines the functionality of the use cases for lifecycle hooks
import classes from './Cockpit.module.css'; // css modules scoped to this component

const Cockpit = props => {
  //useEffect executes for every render cycle can be tricky to use
//   useEffect(() => {
//     console.log('[Cockpit.js] UseEffect...');
//     //http request can be made here
//     setTimeout(() => {
//       //simulating requests
//       alert('Saved data to cloud');
//     }, 1000);
//   }, [props.persons]); //can pass second argument and points to all the variables that are actually used on the effect
    
    
//   //useEffect executes for every render cycle can be tricky to use
  useEffect(() => {
    console.log('[Cockpit.js] UseEffect...');
    //http request can be made here
     setTimeout(() => {
        //simulating requests
        //   alert('Saved data to cloud');
    }, 1000);
      return () => {
        
        console.log('[Cockpit.js] cleanup work in useEffect...');
      }
  }, []);//empty array tells react only to execute only when any dependencies changes and thus only once because it is empty
  useEffect(() => {
    console.log('[Cockpit.js] 2nd UseEffect...');
    return () => {
        console.log('[Cockpit.js] 2nd cleanup work in useEffect...');
      }
  });
  // console.log(props);

  //if 2 persons or less
  //creating css styling to match app.css on if condition then joining
  const assignClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    //coming from the app state
    btnClass = classes.Red; // string from obj css loader that gives us access
  }
  if (props.personsLength <= 2) {
    assignClasses.push(classes.red); // classes = ["red"]
  }
  if (props.personsLength <= 1) {
    assignClasses.push(classes.bold); // classes = ["red", "bold"]
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <h1 className={assignClasses.join(' ')}>Hello There</h1>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(Cockpit); //storing a snapshot of the component 