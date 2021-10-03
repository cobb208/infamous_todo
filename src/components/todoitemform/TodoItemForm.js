import React, { Component } from 'react';

import TodoModel from '../../models/TodoModel';
import styles from './TodoItemForm.module.scss';

class TodoItemForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: ''
        }
    }

    handleFormSubmission = (e) => {
        e.preventDefault();

        const newTodoModel = new TodoModel(this.state.title, this.state.description);

        this.props.newTodo(newTodoModel);

        this.setState({
            title: '',
            description: ''
        });

    }

    handleChange = (e) => {
        const stateName = e.target.name;
        const value = e.target.value;

        this.setState({
            [stateName]: value
        });
    }

    render() {

        return (
            <form className={styles.new_todo_form} onSubmit={this.handleFormSubmission}>
                <fieldset>
                <legend>Create a new item</legend>
                <div className={styles.new_todo_form_input_container}>
                    <label for="title">Title</label>
                    <input name="title" type="text" onChange={this.handleChange} value={this.state.title}/>
                </div>
                <div className={styles.new_todo_form_input_container}>
                    <label for="description">Description</label>
                    <textarea name="description" onChange={this.handleChange} value={this.state.description}></textarea>
                </div>
                <input className={styles.new_todo_form_button} type="submit" value="Create"/>
                </fieldset>
          </form>
        );
    }
}

export default TodoItemForm;