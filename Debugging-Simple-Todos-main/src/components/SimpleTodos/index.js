// FIX1: The import statement for Component class should be written like this
import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  // FIX2: The syntax of assigning state should be like this
  state = {
    todoList: initialTodosList,
  }

  //   FIX3: Class methods should be defined using arrow functions
  deleteTodo = id => {
    const {todoList} = this.state
    const updatedTodosList = todoList.filter(eachTodo => eachTodo.id !== id)

    this.setState({
      todoList: updatedTodosList,
    })
  }

  render() {
    const {todoList} = this.state

    return (
      <div className="simple-todos-app-container">
        <div className="simple-todos-container">
          <h1 className="heading">Simple Todos</h1>
          <ul className="todos-list">
            {/* FIX4: map is an array method and should be used only on arrays */}
            {todoList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
