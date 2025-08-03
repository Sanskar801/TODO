import React from 'react'
import TaskItem from './TaskItem';

const ProjectCard = ({ project, onDeleteProject, onToggleTask }) => {

    const numberOfTasks = project.tasks.length;

    const completedTasks = project.tasks.filter(task => task.completed).length;
    const progressPercentage = numberOfTasks > 0 ? (completedTasks / numberOfTasks) * 100 : 0;

    return (
        <div>
            <h3>{project.name}</h3>
            <p>
                📅 {project.timeSlot} | ⏱️ {project.duration} minutes total
            </p>
            <div
                style={{ width: `${progressPercentage}%` }}
            ></div>
            <span>
                {completedTasks}/{numberOfTasks} completed
            </span>

            <button type='button' onClick={() => onDeleteProject(project.id)}>
                Delete Project
            </button>

            <div>
                <h4>Tasks:</h4>
                {numberOfTasks === 0 ? (
                    <p>No tasks assigned to this project.</p>
                ) : (
                    project.tasks.map(task => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            onToggle={(taskId) => onToggleTask(project.id, taskId)}
                            onDelete={() => { }} // No delete for saved projects
                        />
                    ))
                )
                }
            </div>
        </div>
    )
}

export default ProjectCard