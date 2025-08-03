import { useState } from "react";
import TaskItem from "../component/TaskItem"
import createTask from "../data/Task";
import createProject from "../data/Project";
import ProjectCard from "../component/ProjectCard";


const NewProject = () => {

    const [project, setProject] = useState({
        projectName: '',
        timeSlot: 'morning',
    });

    const [taskForm, setTaskForm] = useState({
        taskName: '',
        duration: 0,
    });

    const [task, setTask] = useState([]);

    const [savedProjects, setSavedProjects] = useState([]);

    const handleAddTask = () => {

        if (!taskForm.taskName.trim()) {
            alert('Please enter a task name');
            return;
        }

        const newTask = createTask(taskForm.taskName, taskForm.duration);
        setTask(prev => [...prev, newTask]);

        setTaskForm({ taskName: '', duration: 0 });
    };

    const handleRemoveTask = (taskId) => {
        setTask(prev => prev.filter(task => task.id !== taskId));
    };

    const handleSaveProject = (e) => {
        e.preventDefault();

        (!project.projectName.trim()) && alert("Please enter a Project Name");
        (!task.length) && alert("Please add at least one task to project");

        const newProject = createProject(project.projectName, project.timeSlot, task);

        setSavedProjects(prev => [...prev, newProject]);

        setProject({ projectName: "", timeSlot: "morning" });
        setTask([]);
        setTaskForm({ taskName: "", duration: 0 });

        alert("Project saved");

    }

    const handleToggleTask = (projectId, taskId) => {
        setSavedProjects(prev => prev.map(project =>
            project.id === projectId
                ? {
                    ...project,
                    tasks: project.tasks.map(task =>
                        task.id === taskId
                            ? {
                                ...task,
                                completed: !task.completed
                            } : task
                    )
                } : project
        ));
    };

    const handleDeleteProject = (projectId) => {
        setSavedProjects(prev => prev.filter(project => project.id !== projectId));
    };

    const totalDuration = task.reduce((acc, task) => acc + task.duration, 0);

    return (
        <section className="add-task">
            <h1>Create New Project</h1>
            <form onSubmit={handleSaveProject}>
                <legend className="project-det">
                    <h3>📋 Project Details</h3>

                    <label htmlFor="project">Project Name</label>
                    <input
                        type="text"
                        name="project"
                        id="project"
                        placeholder='Learn React'
                        value={project.projectName}
                        onChange={e => setProject(prev => ({ ...prev, projectName: e.target.value }))} />

                    <label htmlFor="timeSlot">Time Slot</label>
                    <select
                        name="timeSlot"
                        id="timeSlot"
                        value={project.timeSlot}
                        onChange={e => setProject(prev => ({ ...prev, timeSlot: e.target.value }))}>

                        <option value="morning">Morning (08:00 - 11:00)</option>
                        <option value="afternoon">Afternoon (11:00 - 05:00)</option>
                        <option value="evening">Evening (05:00 - 08:00)</option>
                        <option value="night">Night (08:00 - 10:45)</option>

                    </select>

                </legend>

                <legend className="task-det">

                    <h3>➕ Add Tasks</h3>

                    <label htmlFor="task">Task Name</label>
                    <input
                        type="text"
                        name="task"
                        id="task"
                        placeholder='Learn State management'
                        value={taskForm.taskName}
                        onChange={e => setTaskForm(prev => ({ ...prev, taskName: e.target.value }))}
                    />

                    <label htmlFor="duration">Duration (0-90 minutes)</label>
                    <input
                        type="number"
                        name="duration"
                        id="duration"
                        min="0"
                        max="90"
                        value={taskForm.duration}
                        onChange={e => setTaskForm(prev => ({ ...prev, duration: Number(e.target.value) }))}
                    />

                    <button type="button" onClick={handleAddTask}>Add Task</button>

                </legend>

                <legend className="tasks-list">

                    <h3>📝 Project Tasks</h3>

                    <div>
                        {totalDuration > 0 && (
                            <span>
                                Total: {totalDuration} minutes
                            </span>
                        )}
                    </div>

                    {task.length === 0 ? (
                        <div>
                            <p>No tasks added yet. Add your first task above!</p>
                        </div>) : (
                        <div>
                            {task.map(task => (
                                <TaskItem
                                    key={task.id}
                                    task={task}
                                    onDelete={handleRemoveTask}
                                    isCreating={true}
                                />
                            ))}
                        </div>
                    )

                    }

                </legend>

                <button type="submit">Add Project</button>

            </form>

            {savedProjects.length > 0 && (
                <div>
                    <h2>📚 Your Projects</h2>
                    {savedProjects.map(project => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onDeleteProject={handleDeleteProject}
                            onToggleTask={handleToggleTask}
                        />
                    ))}
                </div>
            )}

        </section>
    )
}

export default NewProject