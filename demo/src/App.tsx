import './App.scss'

import Menu from './components/Menu'
import Setting from './components/Setting'

function App() {
  return (
    <>
      <header>
        <Menu />
        <div className="main-wrapper">
          <div className="main-title">NT Toast</div>
          {/* <div className="sub-title">A flexible and customizable toast notification system for React</div> */}
        </div>
      </header>
      <Setting />
    </>
  )
}

export default App
