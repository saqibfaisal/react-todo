import React from "react";


class Addtodo extends React.Component{
    state={
        todotext : " "
    }
    submitHandler=event=>{
        event.preventDefault();
        this.props.addTodoToState(this.state.todotext)
        this.setState({
            todotext:''
        })
    }
    changeTodoText = event => {
        this.setState({
            todotext : event.target.value
        })
    }
    render(){
        return(
            <div className="App">
                <form  onSubmit={this.submitHandler}>
                    <input type="text" onChange={this.changeTodoText} value={this.state.todotext} placeholder="Enter the Todo"/>
                    <button className="btn" type="submit">Addtodo</button>
                </form>
            </div>
        )
    }
}
export default Addtodo;