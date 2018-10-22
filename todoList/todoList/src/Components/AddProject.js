import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class AddProject extends Component {
    constructor(){
        super();
        this.state={
            newProject:{}
        }
    }
    // this is a "default Property"
    // we then have a property that is an array and then we want to map through them render them.
    static defaultProps = {
        categories: ['Web Design', 'Web Development', 'Mobile Development']
    }

    // this is tying the submit input and the onSubmit attribute and passing it as an event. 
   handleSubmit(e){
       if(this.refs.title.value === '') {
           alert('Please enter a title');
       }else{
           // we submitting the form we want to set the state and set it to the object "newPoject"
           this.setState({newProject:{
               id: uuid.v4(),
               // using a reference of title and using the input as a title
               title: this.refs.title.value,
               category: this.refs.category.value
           }}, function(){
            //    console.log(this.state);

            // we are sending the the new project through the property
            // we use the property add
               this.props.addProject(this.state.newProject);
           });
       }
       console.log('Submitted');
       console.log(this.refs.title.value)
       e.preventDefault();
   }
  render() { 
      // setting a variable that is accessing the categories property and then looping or "Mapping through them"
      // we are then setting it as a new arr or prop and name is "category"
      let categoryOptions = this.props.categories.map(category => {
          return <option key={category} value={category}>{category}</option>
      });
    return (
      <div>
        <h1>Add Project</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
                Title:<br/>
                <input type="text" ref="title"/>
            </div>
            <div>
                <label>Category:</label><br/>
                <select ref="category">
                {categoryOptions}
                </select>
            </div>
            <br/>
            <input type="submit" value="submit"/>
        </form>
        <br/>
        <hr/>
      </div>
    );
  }
}

AddProject.propTypes = {
    categories: PropTypes.array,
    addProject: PropTypes.func
}

export default AddProject;
