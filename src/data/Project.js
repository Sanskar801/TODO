const Project = (projectName, timeSlot, tasks = []) => ({
    id: Date.now(),
    projectName,
    tasks,
    duration: tasks.reduce((acc, task) => acc + task.duration, 0),
    timeSlot,
    createdAt: new Date(),
    completed: false,
})

export default Project