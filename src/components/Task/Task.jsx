import { useState } from "react"
import "./Task.css"

export function Task({ title, description, initialIsFinished }) {
    const [isFinished, setIsFinished] = useState(initialIsFinished)

    const handleIsFinished = () => setIsFinished(!isFinished)
    const titleClassName = isFinished ? "task-title finished" : "task-title"
    const descriptionClassName = isFinished ? "task-description finished" : "task-description"

    return (
        <article className="task-article">
            <aside className="task-aside">
                <input 
                    className="task-checkbox"
                    type="checkbox" 
                    checked={isFinished} 
                    onChange={handleIsFinished}
                />
            </aside>
            <header className="task-header">
                <span className={titleClassName}>{title}</span>
                <span className={descriptionClassName}>{description}</span>
            </header>
        </article>
    )
}