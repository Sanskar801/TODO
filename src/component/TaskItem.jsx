const TaskItem = ({ task, onToggle, onDelete, isCreating = false }) => {
    return (
        <div>

            {isCreating && (
                <input
                    type="checkbox"
                    id="check-item"
                    name="check-item"
                    checked={task.completed}
                    onChange={() => onToggle(task.id)}
                />
            )}

            <span className={task.completed ? 'completed' : ''}>{task.taskName}</span>
            <span className="duration">{task.duration} min</span>

            <button onClick={onDelete(task.id)}>Remove</button>

        </div>
    )
}

export default TaskItem