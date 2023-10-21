import { Fragment } from 'react'
import { AddTaskForm } from './components/AddTaskForm/AddTaskForm'
import { TaskContainer } from './components/TaskContainer/TaskContainer'
import { ThemeSelect } from './components/ThemeSelect/ThemeSelect'


const App = () => {
    return <Fragment>
        <ThemeSelect />
        <AddTaskForm />
        <TaskContainer />
    </Fragment>
}

export default App
