const TaskItem = ({ task, onToggle, onDelete, isCreating = false }) => {
    return (
        <div>

            {isCreating && (
                <input
                    type="checkbox"
                    name="check-item"
                    checked={task.completed}
                    id="check-item"
                    onChange={() => onToggle(task.id)}
                />
            )}

            <span className={task.completed ? 'completed' : ''}>{task.taskName}</span>
            <span className="duration">{task.duration} min</span>

            <button onClick={onDelete}>Remove</button>

        </div>
    )
}

export default TaskItem