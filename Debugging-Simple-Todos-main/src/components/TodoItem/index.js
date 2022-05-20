import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails
  const onDeleteTodo = () => {
    // FIX5 :The id of the todo has to be sent as an argument to the callback function
    deleteTodo(id)
  }

  return (
    //   FIX6: The HTML elements should be wrapped inside a single container element when returning
    <li className="todo-item">
      <p className="title">{title}</p>
      <button type="button" className="delete-btn" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
