import './App.css'
import {TaskPage} from "./components/taskPage/TaskPage.tsx";

export type TodoTask = {
    name: string;
    description: string;
    id: number;
}

const App = () => {
    return (
        <div className={'container'}>
            <TaskPage/>
        </div>
    )
}

export default App
