import './index.css'
import { useState } from 'react'
import DashBoard from './pages/DashBoard'
import NewProject from './pages/NewProject'

const App = () => {

  const [isDashboardOpen, setIsDashboardOpen] = useState(true);
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);

  const handleClick = (e) => {

    if (e.target.textContent === 'New Project') {
      setIsDashboardOpen(false);
      setIsAddTaskOpen(true);
    } else {
      setIsAddTaskOpen(false);
      setIsDashboardOpen(true);
    }
  }

  return (
    <div className='app'>

      <div className="header">

        <button
          onClick={(e) => handleClick(e)}>
          DashBoard
        </button>

        <button
          onClick={(e) => handleClick(e)}>
          New Project
        </button>

      </div>

      <main className="main">
        {isDashboardOpen && <DashBoard />}
        {isAddTaskOpen && <NewProject />}
      </main>

    </div>
  )
}

export default App