import React, { Component } from 'react';
//import styles from './App.module.scss';

import Header from './components/header/Header';
import TodoList from './components/todolist/TodoList';
import TodoItemForm from './components/todoitemform/TodoItemForm';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todoItems: []
    };
  };

  handleNewTodo = (newItem) => {
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        newItem
      ]
    });
  }

  handleEditTodo = (editItem) => {

    let tempItems = [...this.state.todoItems];

    const editIndex = tempItems.findIndex(element => element.id === editItem.id);

    tempItems[editIndex] = editItem;

    this.setState({
      todoItems: [
        ...tempItems
      ]
    });
  }

  render() {
    return (
      <div>
        <Header />
        <TodoList todoList={this.state.todoItems} editListFunc={this.handleEditTodo}/>
        <TodoItemForm newTodo={this.handleNewTodo}/>
      </div>

    )
  }
}


export default App;
