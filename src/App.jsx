import './index.css'
import FocusSession from './component/FocusSession'
import Clock from './component/Clock'
import Calender from './component/Calender'
import TodoList from './component/TodoList'

const App = () => {
  return (
    <div className='app'>
      <div className='timing-det'>
        <FocusSession />
        <Clock />
        <Calender />
      </div>
      <div className='todo-list'>
        <TodoList />
      </div>
    </div>
  )
}

export default App