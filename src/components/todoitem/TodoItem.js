import React, { Component } from 'react';
import styles from './TodoItem.module.scss';

class ToDoItem extends Component {

    constructor(props) {
        super(props);


        this.state = {
            isEditing: false,
            todoModel: {...this.props.todoModel}
        }
    }

    handleChange = (e) => {
        this.setState({
            todoModel: {
                ...this.state.todoModel,
                [e.target.name]: e.target.value
            }
        })
    }

    handleEditMode = (e) => {
        this.setState({
            isEditing: !this.state.isEditing
        });
    }


    handleEditSave = () => {
        this.props.editTodo(this.state.todoModel);
        this.handleEditMode();
    }

    handleComplete = () => {
        this.setState({
            todoModel: {
                ...this.state.todoModel,
                completed: !this.state.todoModel.completed
            }
        });

        this.props.editTodo(this.state.todoModel);
    }

    render() {

        let editHtmlState;
        let buttonHtmlState;
        let completedStatus;

        if(this.state.isEditing) {
            editHtmlState = (
                <div>
                    <label>Title</label>
                    <input onChange={this.handleChange} name="title" id="title" value={this.state.todoModel.title}/>
                    <label>Description</label>
                    <textarea onChange={this.handleChange} name="description" id="description" value={this.state.todoModel.description}></textarea>
                </div>
            )
            buttonHtmlState = (
                <button className={styles.todoButton} onClick={this.handleEditSave}>Save</button>
            )
        } else {
            editHtmlState = (
                <div className={styles.todo_item_header}>
                    <h3>Task: {this.state.todoModel.title}</h3>
                    <p>Description: {this.state.todoModel.description}</p>
                </div>
            )
            buttonHtmlState = (
                <button className={styles.todoButton} onClick={this.handleEditMode}>Edit</button>
            )
        }

        if(this.state.todoModel.completed) {
            completedStatus = (
                <p>Complete</p>
            )
        } else {
            completedStatus = (
                <p>Not complete</p>
            )
        }

        return (
            <li className={styles.todo_item_container}>
                <div>
                    {editHtmlState}
                </div>
                
                <div className={styles.button_container}>
                    <div className={styles.button_container_inner}>
                        {buttonHtmlState}
                        <button className={styles.todoButton} onClick={this.handleComplete}>Complete</button>
                    </div>
                </div>
                <div className={styles.todo_item_completed_container}>
                    {completedStatus}
                </div>
            </li>
        );
    }
}

export default ToDoItem;