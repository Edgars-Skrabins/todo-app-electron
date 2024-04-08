import styles from './TaskPage.module.css';
import {TaskCreateField} from "../taskCreateField/TaskCreateField.tsx";
import {TodoTask} from "../../App.tsx";
import {useState} from "react";
import {Task} from "../task/Task.tsx";

export const TaskPage = () => {
    const [tasks, setTasks] = useState<TodoTask[]>([]);

    const handleTaskCreated = (task: TodoTask) => {
        const tasksArr = [...tasks];
        tasksArr.push(task);
        console.log("created task")
        setTasks(tasksArr);
    }

    return (
        <div className={styles.container}>
            <TaskCreateField onTaskCreate={handleTaskCreated}/>

            <div className={styles.taskContainer}>
                {tasks.map((task) => (
                    <Task key={task.id} taskName={task.name} taskDescription={task.description}/>
                ))}
            </div>
        </div>
    );
};
