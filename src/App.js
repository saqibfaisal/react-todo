import React ,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Addtodo from "./Addtodo";
import Todoitem from "./Todoitem";
class App extends Component{
    state={
          todos:[
            {
              text:"react todo complete",
              completed:true
            },
            {
              text:'react complete 10 days',
              completed:false
            }
          ]
      };
      toggleComplete = index =>{
        const newTodos = this.state.todos.map((todo,i) => {

          if(index===i){
            return {
              ...todo,
              completed: !todo.completed
            };
          };
          return todo
        })
        this.setState({
          todos:newTodos
        })
      }
    addTodoToState = text => {
      const newTodo = this.state.todos.concat({
        text:text,
        completed:false
      })
      this.setState({
        todos:newTodo
      })
    }  
    deleteTodoFromState = (index) => {
      const newTodo = this.state.todos.filter((todo,i)=>{
        if (index===i) {
          return false;
        }
        return true;
      });
      this.setState({
        todos:newTodo
      })
    }
    editTodoFormState=(index,newText)=>{
      const newTodos = this.state.todos.map((todo,i)=>{
        if(index===i){
          return{
            ...todo,
            text:newText
          }
        }
        return todo
      })
      // console.log(newTodos)
      this.setState({
        todos:newTodos
      })
    }
  render(){
    return(
      <div className='App'>
          <Addtodo 
         addTodoToState={this.addTodoToState} />
        <div className='main'>
          {this.state.todos.map((todo,index)=>{
            return <Todoitem
            editTodoFormState={this.editTodoFormState} 
            deleteTodoFromState={this.deleteTodoFromState}
            toggleComplete={this.toggleComplete} 
            index={index}
            todo={todo} key={index}/>
            
          })}
        </div>
      </div>
    )
  }
}

export default App;
