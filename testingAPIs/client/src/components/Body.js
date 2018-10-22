import React, { Component } from 'react';

import './Body.css';

// this is our root componet
class Body extends Component {
  constructor(props) {
    super(props); // this is needed for us to have use of it. It is calling the parents component constructors
    // console.log(props.title)// this is using the 'title' from App component.
    this.state = {
      news: [],
      tasks:[],

      task: {
        title: '',
        description: ''
      }
    }
  }



  postData = (url = ``, data = {}) => {
    // Default options are marked with *
      return fetch(url, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, cors, *same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, same-origin, *omit
          headers: {
              "Content-Type": "application/json; charset=utf-8",
              // "Content-Type": "application/x-www-form-urlencoded",
          },
          redirect: "follow", // manual, *follow, error
          referrer: "no-referrer", // no-referrer, *client
          body: JSON.stringify(data), // body data type must match "Content-Type" header
      })
      .then(response => response.json()) // parses response to JSON
      .catch(error => console.error(`Fetch Error =\n`, error));
  };


  submit(e) {
    e.preventDefault()

  this.postData(`http://localhost:8000/api/tasks`, this.state.task) //the state needs to be included in order for it to send the object
  .then(data => {
    if(data.errors){
      console.log(data.errors) // we want to cancel the errors
    }else{
      data = ( // we are manipulating the data. 
        <div key={data._id}>
          <h4>Title: {data.title}</h4>
          <p>Description: {data.description}</p>
          <br/>
        </div>
      )
 
      this.setState({//put the array back in there
        tasks: [...this.state.tasks, data]  // I don't know the 3 dots but they're necessary 
      })

      this.refs.Create_Task.reset(); // we reset the form

    }


  }) 
  .catch(error => console.error(error)); // we long any errors, don't know how to pass them onto pages yet.

  }
  setTitle(e) {
    let task = this.state.task; //this is pulling the task from the the this.state
    task.title = e.target.value; // this is 2 way binding the data to just the title
    this.setState({ task: task }) // update the task object to that particular task
  }
  // same for description. Separating attributes is the preferred way on React
  setDescription(e) {
    let task = this.state.task; 
    task.description = e.target.value; 
    this.setState({ task: task })
  }
  // when clicking submit this will activatie the submit function
  // "e" is short for Event
  render() {
    return (
      <div className="Body">

      {JSON.stringify(this.state.task)}

        <form ref="Create_Task" className="form-group" onSubmit={(event)=>{this.submit(event)}}>
          <p>
            Title: <input type="text" onChange={(e)=>{this.setTitle(e)}} />
          </p>

          <p>
            Description: <input type="text"  onChange={(e)=>{this.setDescription(e)}} />
          </p>
          
          <input type="submit" className="btn btn-success" placeholder="Create Task"/>
        </form>

        <p>{this.props.test}</p>
        {this.state.tasks}
        <p> This is where the APIs separate</p>
        {this.state.news}
      </div>
    );
  }
  componentDidMount() {
    // This is essentially ngOninit
    fetch(
      'https://newsapi.org/v2/top-headlines?sources=reddit-r-all&apiKey=fd83ead080ef43469e5548f326ddf351'
    ) //  51 this is making the query
      // fetch('https://pokeapi.co/api/v2/pokemon/1', {mode: 'no-cors'}) // this is making the query  for some reason I can't get it to work with the poke.
      .then(data => data.json()) // recieves the data turns it into json
      .then(data => {
        for (let articles in data.articles) {
          data.articles[articles] = (
            <div key={articles}>
              <h2>Title: {data.articles[articles].title}</h2>
              <h4>Description: {data.articles[articles].description}</h4>
              <p>Url: {data.articles[articles].url}'></p>
              <br />
            </div>
          );
        }

        this.setState({
          news: data.articles // this is necessary for the state for identifying the object
        });
      })
      .catch(err => err);
  
    fetch(
      'http://localhost:8000/api/tasks'
    ) //  51 this is making the query
      // fetch('https://pokeapi.co/api/v2/pokemon/1', {mode: 'no-cors'}) // this is making the query  for some reason I can't get it to work with the poke.
      .then(data => data.json()) // recieves the data turns it into json
      .then(data => {
        for (let i in data) {
          data[i] = (
            <div key={i}>
              <h4>Title: {data[i].title}</h4>
              <p>Description: {data[i].description}</p>
              <br />
            </div>
          );
        }

        this.setState({
          tasks: data // this is necessary for the state for identifying the object
        });
      })
      .catch(err => err);
  }
}

export default Body;
