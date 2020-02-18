import React, { Component } from 'react';
import './Todo.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task // when loading get task
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing }); //opposite of state
  }
  handleToggle(evt) {
    this.props.toggleTodo(this.props.id);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  handleUpdate(evt) {
    evt.preventDefault();
    //take new task data and pass up to parent //no need to pass id as a param
    this.props.updateTodo(this.props.id, this.state.task); //using task from two way binding
    this.setState({ isEditing: false }); // show the task back up
  }
  handleRemove() {
    this.props.removeTodo(this.props.id);
  }

  render() {
    let result;

    //if editing show a form, otherwise show task
    if (this.state.isEditing) {
      result = (
        <CSSTransition key='editing' timeout={500} classNames='form'>
          <form className='Todo-edit-form' onSubmit={this.handleUpdate}>
            <input
              type='text'
              value={this.state.task}
              name='task'
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </CSSTransition>
      );
    } else {
      result = (
        <CSSTransition key='normal' timeout={500} classNames='task-text'>
          <li className='Todo-task' onClick={this.handleToggle}>
            {this.props.task}
          </li>
        </CSSTransition>
      );
    }
    return (
      <TransitionGroup
        className={this.props.completed ? 'Todo completed' : 'Todo'}
      >
        {result}
        {/* handles delete or edit for "This" task */}
        <div className='Todo-buttons'>
          <button onClick={this.toggleForm}>
            <i class='fas fa-pen' />
          </button>
          <button onClick={this.handleRemove}>
            <i class='fas fa-trash' />
          </button>
        </div>
      </TransitionGroup>
    );
  }
}
export default Todo;
