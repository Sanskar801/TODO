const Task = (taskName = 'Empty task', duration = 5) => ({
    id: Date.now(),
    taskName,
    duration: Number(duration),
    project: '',
    completed: false,
})

export default Task