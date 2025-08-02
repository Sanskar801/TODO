import TaskItem from "../component/TaskItem"


const NewProject = () => {
    return (
        <section>
            <div className="add-task">
                <form>
                    <legend>
                        <label htmlFor="project">Add Project</label>
                        <input
                            type="text"
                            name="project"
                            id="project"
                            placeholder='Enter project' />

                        <select name="peher" id="peher">
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
                            placeholder='Enter task' />

                        <input
                            type="number"
                            name="duration"
                            id="duration"
                            placeholder='Duration'
                            min="0"
                            max="90" />
                        <label> minutes</label>

                        <button>Add Task</button>

                    </legend>

                    <legend className="tasks-list">
                        <TaskItem />
                    </legend>

                    <button type="submit">Add Project</button>

                </form>
            </div>
        </section>
    )
}

export default NewProject