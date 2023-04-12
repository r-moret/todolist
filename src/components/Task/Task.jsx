import { useState } from "react"
import "./Task.css"
import { UncheckedIcon } from "../UncheckedIcon/UncheckedIcon.jsx"
import { CheckedIcon } from "../CheckedIcon/CheckedIcon.jsx"

export function Task({ index, title, description, isFinished, updateTask }) {
    const handleClick = () => {
        const newTask = {
            title: title,
            description: description,
            finished: !isFinished
        }

        updateTask(newTask, index)
    }

    const titleClassName = "task-title" + (isFinished ? " finished" : "")
    const descriptionClassName = "task-description" + (isFinished ? " finished" : "")

    return (
        <article className="task-article">
            <aside className="task-aside">
                <button className="task-icon-button" onClick={handleClick}>
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