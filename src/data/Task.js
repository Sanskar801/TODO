const createTask = (taskName = 'Empty task', duration = 0) => ({
    id: Date.now(),
    taskName,
    duration: Number(duration),
    project: '',
    completed: false,
})

export default createTask