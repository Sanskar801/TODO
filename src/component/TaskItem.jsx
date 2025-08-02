const TaskItem = () => {
    return (
        <div>

            <input
                type="checkbox"
                name="check-item"
                id="check-item" />

            <label htmlFor="check-item">Sample Task</label>

            <button>Delete</button>

        </div>
    )
}

export default TaskItem