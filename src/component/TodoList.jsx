const TodoItem = () => {
    return (
        <div>

            <input
                type="checkbox"
                name="check-item"
                id="check-item" />

            <label htmlFor="check-item">Sample Task</label>

            <button>Delete</button>
            {/* <button>Priority</button> */}

        </div>
    )
}

const TodoList = () => {
    return (
        <div className='todo-list'>

            <form>

                <input
                    type="text"
                    name="task"
                    id="task" />

                <button type="submit">Add Task</button>

            </form>
            <div className="todo-items">
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        </div>
    )
}

export default TodoList