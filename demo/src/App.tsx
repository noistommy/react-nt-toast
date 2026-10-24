import './App.scss'

import Menu from './components/Menu'
import Setting from './components/Setting'
// import Cabinet from './NTCabinet/Cabinet.tsx'
import {NtCabinetReact} from 'nt-cabinet-component/react'

function App() {
  return (
    <>
      <header>
        <Menu />
        <div className="main-wrapper">
          <div className="toast-preview">
            <div className="toast">
              <div className="toast-icon">
                <i className="xi-info" />
              </div>
              <div className="toast-contents">
                <div className="title">NT Toast</div>
                <div className="message">A flexible and customizable toast notification system for React</div>
              </div>
              <div className="toast-close">
                <i className="xi-close" />
              </div>
            </div>
          </div>
          <div className="main-title">NT Toast</div>
          <div className="sub-title">A flexible and customizable toast notification system for <span className="be-tag label blue">React</span></div>
        </div>
      </header>
      <Setting />
      <NtCabinetReact module="react-nt-toast" />
    </>
  )
}

export default App
