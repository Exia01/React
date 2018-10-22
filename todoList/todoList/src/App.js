import $ from 'jquery';
import React, { Component } from 'react';
import uuid from 'uuid';
import './App.css';
import AddProject from './Components/AddProject';
import Projects from './Components/Projects';
import Todos from './Components/Todos';
import Login from './Components/TestComponents/Login'

class App extends Component {
	constructor() {
		super();
		this.state = {
			projects: [],
			todos: [],
		};
	}

	getTodos() {
		$.ajax({
			url: 'https://jsonplaceholder.typicode.com/todo',
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({ todos: data }, function() {
					console.log(this.state);
				});
			}.bind(this),
			error: function(xhr, statis, err) {
				console.log(err);
			},
		});
	}
	getProjects() {
		this.setState({
			projects: [
				{
					id: uuid.v4(), // everytime we use this, it will generate a new id
					title: 'Business Website',
					category: 'Web Design',
				},
				{
					id: uuid.v4(),
					title: 'Social App',
					category: 'Mobile Development',
				},
				{
					id: uuid.v4(),
					title: 'Ecommerce Shopping Cart',
					category: 'Web Development',
				},
			],
		});
	}
	componentWillMount() {
		this.getProjects();
		this.getTodos();
	}
	componentDidMount() {
		this.getTodos();
	}
	handleAddProject(project) {
		let projects = this.state.projects;
		projects.push(project);
		this.setState({ projects: projects });
	}
	handleDeleteProject(id) {
		let projects = this.state.projects;
		let index = projects.findIndex(x => x.id === id);
		projects.splice(index, 1);
		this.setState({ projects: projects });
	}
	render() {
		// When you return in your render, everything has to be in ONE element(div).
		// There can be multiple divs inside the main div. but there can only be one div at the very top level
		return (
			<div className="App">
		<AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
        <hr/>
        <Todos todos={this.state.todos}/>
        <Login todos={this.state.todos}/>
			</div>
		);
	}
}

export default App;
