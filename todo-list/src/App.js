import React from "react"
import TodoItem from './TodoItem'
import todoData from './todoData'


class App extends React.Component {
    constructor(){
        super()
        this.state = {
            todos: todoData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
        this.setState(prevState =>{
            const updateTodos = prevState.todos.map(todo =>{
                if (todo.id === id){
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }    
                return todo             
            })
            return {todos: updateTodos}
        })
    }

    render(){
        const todoItems = this.state.todos.map(item =>{
            return(
                <TodoItem 
                key = {item.id}
                item = {item}
                handleChange = {this.handleChange}
                />    
            )
        })
        return(
            <div className='todo-list'>
                <h1>Your To-Learn list</h1>
                {todoItems}
            </div>
    
        )

    }
    

}

export default App