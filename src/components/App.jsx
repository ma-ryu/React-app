import React, { Component } from 'react';
import Form from './Form';
import List from './List';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo: [],
      priority: ''
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.handlePriority = this.handlePriority.bind(this);
  }

  handleAdd(e){
    e.preventDefault();
    this.state.todo.push({title: e.target.title.value})
    this.setState({todo: this.state.todo})
    console.log(this.state.todo);
    e.target.title.value = '';
  }
  handlePriority(e){
    this.setState.priority = e.target.value;
    console.log(this.state.priority);
  }

  deleteTodo(i){
    this.state.todo.splice(i, 1);
    this.setState({todo: this.state.todo})
  }

  render() {
    return (
      <div className="column is-three-fifths is-offset-one-fifth">
        <h1 className="mb-5">React Todo App</h1>
        <Form handleAdd={this.handleAdd}  handlePriority={this.handlePriority} />
        <div className="mt-5">
          <List todos={this.state.todo} deleteTodo={this.deleteTodo} />
        </div>
      </div>
    );
  }
}