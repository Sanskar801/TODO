import { useState } from "react";
import TaskItem from "../component/TaskItem"
import Project from "../data/Project";
import Task from "../data/Task";


const NewProject = () => {

    const [project, setProject] = useState(Project);
    const [task, setTask] = useState(Task);

    const handleAddTask = () => {

    }

    const handleRemoveTask = () => {

    }

    return (
        <section className="add-task">
            <form>
                <legend>

                    <label htmlFor="project">Add Project</label>

                    <input
                        type="text"
                        name="project"
                        id="project"
                        placeholder='Enter project'
                        value={project.name}
                        onChange={e => setProject({ ...project, name: e.target.value })} />

                    <select
                        name="peher"
                        id="peher"
                        value={project.timeSlot}
                        onChange={e => setProject({ ...project, timeSlot: e.target.value })}>
                        <option value="morning">Morning (08:00 - 11:00)</option>
                        <option value="afternoon">Afternoon (11:00 - 05:00)</option>
                        <option value="evening">Evening (05:00 - 08:00)</option>
                        <option value="night">Night (08:00 - 10:45)</option>
                    </select>

                </legend>

                <legend>

                    <label htmlFor="task">Add Task</label>

                    <input
                        type="text"
                        name="task"
                        id="task"
                        placeholder='Enter task'
                        value={task.name}
                        onChange={e => setTask({ ...task, name: e.target.value })} />

                    <input
                        type="number"
                        name="duration"
                        id="duration"
                        placeholder='Duration'
                        min="0"
                        max="90"
                        value={task.duration}
                        onChange={e => setTask({ ...task, duration: e.target.value })} />
                    <label> minutes</label>

                    <button onClick={handleAddTask}>Add Task</button>

                </legend>

                <legend className="tasks-list">

                    <label>📝 Project Tasks</label>
                    
                    <TaskItem
                        key={task.id}
                        task={task}
                        onDelete={handleRemoveTask}
                        isCreating={true}
                    />

                </legend>

                <button type="submit">Add Project</button>

            </form>

        </section>
    )
}

export default NewProject