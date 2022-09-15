import React from "react";

class Todoitem extends React.Component{
    state={
        isEditing: false
    }
    toggleEditing= ()=>{
        this.setState({
            isEditing :!this.state.isEditing
        })
    }
    clickHandler = ()=>{
        this.props.toggleComplete(this.props.index)
    }
    deleteTodo = ()=>{
        this.props.deleteTodoFromState(this.props.index)
    }
    editTodoSubmitHandler = event =>{
        event.preventDefault();
        this.props.editTodoFormState(this.props.index,this.newText.value)
        this.toggleEditing();
    }
    
    
    render(){
        const { todo } = this.props
        if (this.state.isEditing) {
            return (
                <li>
                    <form onSubmit={this.editTodoSubmitHandler}>
                        <input type="text" defaultValue={todo.text} ref={(node => {this.newText=node })} />
                        <button className="btn" type="submit" onClick={this.editTodo}>Save</button>
                        <button className="btn" onClick={this.toggleEditing}>Cancle</button>
                    </form>
                </li>
            )
        }
        return(
            <li className={todo.completed?"completed": " "}>
                <span onClick={this.clickHandler}>
                    {todo.text}
                </span>
                <span>
                    <button className="btn" onClick={this.toggleEditing}>Edit</button>
                    <button className="btn" onClick={this.deleteTodo}>Delete</button>
                </span>
            </li>
        )
    }
}
export default Todoitem;