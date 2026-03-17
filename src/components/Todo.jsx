
import './Todo.css'


function Todo({title }) {

    return (
        <div className="todo">
        <p>{ title }</p>
        <button onClick={onTodoDelete}>Delete</button>
      </div>
    )
}

export default Todo;