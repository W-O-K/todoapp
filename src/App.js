import React from 'react'
import TodoItem from './components/TodoItem'
import AddItem from './components/AddItem'
import todosData from './todoData'

class App extends React.Component{
	constructor(props){
		super(props)
		this.handleChange = this.handleChange.bind(this);
		this.handleValueChange = this.handleValueChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			id: 1,
    		text:'',
			todos: todosData
		}
	}
	
	 handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    handleValueChange(event) {
    this.setState({text: event.target.value});
  }

  handleSubmit(event) {
  		 this.setState((prevState) => ({id: prevState.id + 1}));
  		 const updatedTodos = [...this.state.todos]
  		 const newTodo = {id: this.state.id, text: this.state.text, completed: false }
  		 updatedTodos.push(newTodo)
  		 this.setState({todos: updatedTodos})
     event.preventDefault();        
  }

render(){
	const todoItem = this.state.todos.map(item =>
		<TodoItem
		key = {item.id}
		item={item}
		handleChange={this.handleChange} />)
	return(
		<div className = 'todo-list'>
			<h1>To-do List</h1>
			<AddItem value={this.state.text} handleValueChange={this.handleValueChange} handleSubmit={this.handleSubmit}/>
			{todoItem}
		</div>
		)
}

}

export default App

  //my own, works well
	// handleChange(id){
	// 	const updatedTodos = this.state.todos.map(todo =>{
	// 		if(todo.id === id){
	// 			return {
 //            ...todo,
 //             completed: !todo.completed
 //                    }
	// 		}
	// 		return todo
	// 	})
	// 	this.setState({
	// 		todos: updatedTodos
	// 	});
	// 	}