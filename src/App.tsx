import { Fragment } from 'react'
import './App.scss'
import { AddTaskForm } from './components/AddTaskForm/AddTaskForm'
import { TaskContainer } from './components/TaskContainer/TaskContainer'


const App = () => {
    return <Fragment>
        <AddTaskForm />
        <TaskContainer />
    </Fragment>
}

export default App
