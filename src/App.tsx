import { Fragment } from 'react'
import { AddTaskForm } from './components/AddTaskForm/AddTaskForm'
import { TaskContainer } from './components/TaskContainer/TaskContainer'


const App = () => {
    return <Fragment>
        <AddTaskForm />
        <TaskContainer />
    </Fragment>
}

export default App
