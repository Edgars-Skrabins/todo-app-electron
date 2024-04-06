type TaskProps = {
    taskName: string;
    taskDescription: string;
}
export const Task = (props: TaskProps) => {
    return (
        <div style={{backgroundColor: 'black', display: 'flex', justifyContent: 'center'}}>
            <h2> {props.taskName} </h2>
            <h3> {props.taskDescription} </h3>
        </div>
    );
};

