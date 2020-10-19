import React, { Component } from 'react';
import Form from './Form';
import List from './List';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo: []
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(e){
    e.preventDefault();
    this.state.todo.push({title: e.target.title.value})
    this.setState({todo: this.state.todo})

    e.target.title.value = '';
  }
  render() {
    return (
      <div className="column is-three-fifths is-offset-one-fifth">
        <h1 className="mb-5">React Todo App</h1>
        <Form handleAdd={this.handleAdd} />
        <List todos={this.state.todo} />
      </div>
    );
  }
}