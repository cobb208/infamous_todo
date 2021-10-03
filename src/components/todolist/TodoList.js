import React, { Component } from 'react';

import TodoItem from '../todoitem/TodoItem';
import styles from './ToDoList.module.scss';

class TodoList extends Component {


    render() {

        const todoList = this.props.todoList;

        let todoListFormat;

        if (todoList.length > 0) {
            todoListFormat = (
                <ul>
                    {todoList.map(todo => {
                        return (
                            <TodoItem key={todo.id} todoModel={todo} editTodo={this.props.editListFunc}/>
                        )
                    })}
                </ul>
            )
        } else {
            todoListFormat = (<p>No items!</p>);
        }

        return (
            <div>
                <h2 className={styles.todo_list_subheader}>To Do List</h2>
                {todoListFormat}
            </div>
        );
    }
}

export default TodoList;