import { Fragment } from 'react'
import { AddTaskForm } from './components/AddTaskForm/AddTaskForm'
import { TaskContainer } from './components/TaskContainer/TaskContainer'
import { ThemeSelect } from './components/ThemeSelect/ThemeSelect'
import { Divider } from './components/Divider/Divider'


const App = () => {
    return <Fragment>
        <ThemeSelect />
        <AddTaskForm />
        <Divider />
        <TaskContainer />
    </Fragment>
}

export default App
