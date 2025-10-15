import { useState } from 'react'

import { BeSwitch } from 'react-be-ui';
import { useToast } from '../../../dist/nt-toast.es'

const status = ['success', 'info', 'danger', 'attention', 'important'];
const themes = ['default', 'light', 'icon', 'icon-bg', 'line'];
const positions = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right', 'top-full-width', 'bottom-full-width'];
const colorList = ['red', 'orange', 'yellow', 'lightgreen', 'green', 'lightblue', 'blue', 'deepblue', 'deeppurple', 'purple', 'brown', 'gray']
  
function Setting () {

  const toast = useToast()

  

  const [state, setState] = useState('success')
  const [theme, setTheme] = useState('default')
  const [position, setPosition] = useState('top-right')
  const [option, setOption] = useState({
    useTitle: true,
    useIcon: true,
    round: false,
    closeButton: false,
    displayOnTop: false,
    snackbar: false,
    freeze: false
  })
  const [timeout, setTimeout] = useState(5000)


  const handleClick = () => {
    toast.show(state, {
      title: state.toUpperCase(),
      description: `This is ${state} toast`
    }, {
      ...option,
      timeout,
      position: window.innerWidth < 480 ? 'bottom-full-width' : position,
      theme // 'light', 'icon', 'icon-bg', 'line'
    })
  }

  const clearToast = () => toast.clear()

  const setUseTitle = (value) => {
    setOption({...option, useTitle: value})
  }
  const setUseIcon = (value) => {
    setOption({...option, useIcon: value})
  }
  const setRound = (value) => {
    setOption({...option,round: value})
  }
  const setCloseButton = (value) => {
    setOption({...option,closeButton: value})
  }
  const setDisplayOnTop = (value) => {
    setOption({...option,displayOnTop: value})
  }
  const setSnackbar = (value) => {
    setOption({...option,snackbar: value})
  }
  const setFreeze = (value) => {
    setOption({...option,freeze: value})
  }

  return (
    <>
      <div className="be-segment">
        <div className="contents">
          <div className={`be-button ${state}`} onClick={handleClick}>Create Toast</div>
          <div className={`be-button secondary outline`} onClick={clearToast}>Clear All</div>
        </div>
      </div>
      <h4>Setting Option 1</h4>
      <div className="be-segment border setting-1">
        <div className="contents">
          <div className="be-grid divide-2 divide-xs-1">
            <div className="column">
              <div className="be-list list">
                <div className="item be-message set-item">
                  <div className="desc">제목 사용(Use Title)</div>
                  <div className="btn">
                    <BeSwitch round checked={option.useTitle} onChange={setUseTitle} />
                  </div>
                </div>
                <div className="item be-message set-item">
                  <div className="desc">아이콘 사용(Use Icon)</div>
                  <div className="btn">
                    <BeSwitch round checked={option.useIcon} onChange={setUseIcon} />
                  </div>
                </div>
                <div className="item be-message set-item">
                  <div className="desc">둥근 모서리 사용(Use Round)</div>
                  <div className="btn">
                    <BeSwitch round checked={option.round} onChange={setRound} />
                  </div>
                </div>
                <div className="item be-message set-item">
                  <div className="desc">닫기 버튼 사용(Use Close Button)</div>
                  <div className="btn">
                    <BeSwitch round checked={option.closeButton} onChange={setCloseButton} />
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="be-list list">
                <div className="item be-message set-item">
                  <div className="desc">새 토스트 생성 위치(Create from Top)</div>
                  <div className="btn">
                    <BeSwitch round checked={option.displayOnTop} onChange={setDisplayOnTop} />
                  </div>
                </div>
                <div className="item be-message set-item">
                  <div className="desc">스넥바 모드(use Snackbar Mode)</div>
                  <div className="btn">
                    <BeSwitch round checked={option.snackbar} onChange={setSnackbar} />
                  </div>
                </div>
                <div className="item be-message set-item">
                  <div className="desc">자동 삭제 사용(use Auto Close)</div>
                  <div className="btn">
                    <BeSwitch round checked={!option.freeze} onChange={setFreeze} />
                  </div>
                </div><div className="item be-message set-item">
                  <div className="desc">지속시간(Delay Time)</div>
                  <div className="be-input unit compact" data-unit="ms">
                    <input type="number" value={timeout} onChange={() => setTimeout(event.target.value)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4>Setting Option 2</h4>
      <div className="be-segment border setting-2">
        <div className="contents">
          <div className="h6 title">States</div>
          {status && status.map(stat => (
            <button className={`be-button ${stat === state ? state : ''}`} onClick={() => setState(stat)}>{stat}</button>
          ))}
        </div>
        <div className="contents">
          <div className="h6 title">Color</div>
          {colorList && colorList.map(color => (
            <button className={`be-button ${color === state ? state : ''}`} onClick={() => setState(color)}>{color}</button>
          ))}
        </div>
        <div className="contents">
          <div className="h6 title">Theme</div>
            {themes && themes.map(thm => (
              <button className={`be-button ${thm === theme ? 'selected' : ''}`} onClick={() => setTheme(thm)}>{thm}</button>
            ))}
        </div>
        <div className="contents">
          <div className="h6 title">Position</div>
          {positions && positions.map(pos => (
            <button className={`be-button ${pos === position ? 'selected' : ''}`} onClick={() => setPosition(pos)}>{pos}</button>
          ))}
          
        </div>
      </div>
    </>
  )
}

export default Setting