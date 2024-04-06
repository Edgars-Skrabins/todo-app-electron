import styles from './TaskCreateField.module.css';
import {TodoTask} from "../../App.tsx";
import {useRef} from "react";

type TaskCreateFieldProps = {
    onTaskCreate: (task: TodoTask) => void;
}

export const TaskCreateField = (props: TaskCreateFieldProps) => {

    const nameInputRef = useRef<HTMLInputElement>(null);
    const descriptionInputRef = useRef<HTMLInputElement>(null);

    const handleTaskCreation = () => {
        if (nameInputRef.current && descriptionInputRef.current) {
            createTask(nameInputRef.current.value, descriptionInputRef.current.value);
        }
    }

    const createTask = (taskName: string, taskDescription: string) => {
        const newTask: TodoTask = {
            name: taskName,
            description: taskDescription,
            id: Date.now(),
        }
        props.onTaskCreate(newTask);
    }

    return (
        <div className={styles.container}>
            <label htmlFor="" className={styles.label}>
                Task name
                <input type="text" className={styles.inputs} ref={nameInputRef}/>
            </label>
            <label htmlFor="" className={styles.label}>
                Task description
                <input type="text" className={styles.inputs} ref={descriptionInputRef}/>
            </label>

            <button className={styles.button} onClick={handleTaskCreation}> Create task</button>
        </div>
    );

};


