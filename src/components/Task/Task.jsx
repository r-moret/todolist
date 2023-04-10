import { useState } from "react"
import "./Task.css"
import { UncheckedIcon } from "../UncheckedIcon/UncheckedIcon.jsx"
import { CheckedIcon } from "../CheckedIcon/CheckedIcon.jsx"

export function Task({ index, title, description, isFinished, updateTask }) {
    const handleIsFinished = () => {
        const newTask = {
            title: title,
            description: description,
            finished: !isFinished
        }

        updateTask(newTask, index)
    }
    const titleClassName = isFinished ? "task-title finished" : "task-title"
    const descriptionClassName = isFinished ? "task-description finished" : "task-description"

    return (
        <article className="task-article">
            <aside className="task-aside">
                <button className="task-icon-button" onClick={handleIsFinished}>
                    { isFinished ?  <CheckedIcon /> : <UncheckedIcon /> }
                </button>
            </aside>
            <header className="task-header">
                <span className={titleClassName}>{title}</span>
                <span className={descriptionClassName}>{description}</span>
            </header>
        </article>
    )
}