import { useState } from 'react'

import { BeSwitch, BeInputNumber } from 'react-be-ui';
import { useToast } from '../../../src/index.tsx'

const status = ['success', 'info', 'danger', 'attention', 'importance'];
const themes = ['default', 'light', 'icon', 'icon-bg', 'line'];
const positions = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right', 'top-full-width', 'bottom-full-width'];
const colorList = ['red', 'orange', 'yellow', 'lightgreen', 'green', 'lightblue', 'blue', 'deepblue', 'deeppurple', 'purple', 'brown', 'gray']
  
function Setting () {

  const toast = useToast()

  

  const [state, setState] = useState('default')
  const [theme, setTheme] = useState('default')
  const [position, setPosition] = useState('bottom-right')
  const [option, setOption] = useState({
    useTitle: true,
    useIcon: false,
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

  const setUseTimeout = (value) => setTimeout(value)

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
      <div className="be-segment align-center btn-set">
        <div className="contents">
          <div className={`be-button ${state}`} onClick={handleClick}>Create Toast</div>
          <div className={`be-button secondary`} onClick={clearToast}>Clear</div>
        </div>
      </div>
      <div className="detail">
        <div className="header">
          <div className="title">Basic Setting</div>
        </div>
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
                
              </div>
            </div>
            <div className="column">
              <div className="be-list list">
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
          </div>
      </div>
      <div className="detail">
        <div className="header">
          <div className="title">Display ordering</div>
          <p>새로 생성된 토스트가 리스트에서 나타나는 위치를 설정합니다. True 일 경우, 신규 토스트가 항상 리스트 첫번째 아이템으로 나타납니다.</p>
        </div>
        <div className="be-segment border">
          <div className="contents">
            <div className="check-set" >
              <BeSwitch round checked={option.displayOnTop} onChange={setDisplayOnTop} />
              <div className="desc">새 토스트 생성 위치(Create from Top)</div>
            </div>
          </div>
        </div>
      </div>
      <div className="detail">
        <div className="header">
          <div className="title">Snackbar</div>
          <p>Snackbar란? 화면 (보통 하단)에 표시되는 간단한 알림. 사용자 환경을 방해하지 않고 작업 또는 활동에 관한 의견을 제공합니다.</p>
          <p>toast vs snackbar toast와 다른 것은 신규 컨턴츠 생성 시 단일 텍스트 액션을 통해 사용자와 상호작용합니다.</p>
        </div>
        <div className="be-segment border">
          <div className="contents">
            <div className="check-set" >
              <BeSwitch round checked={option.snackbar} onChange={setSnackbar} />
              <div className="desc">스넥바 모드(use Snackbar Mode)</div>
            </div>
          </div>
        </div>
      </div>
      <div className="detail">
        <div className="header">
          <div className="title">Freeze</div>
          <p>기본적으로 toast는 생성 후 자동으로 삭제되는데 이 설정을 통해 수동으로 삭제하도록 할 수 있습니다. true 시 사라지지 않고 화면에 남아있게 됩니다.</p>
        </div>
        <div className="be-segment border">
          <div className="contents">
            <div className="check-set" >
              <BeSwitch round checked={!option.freeze} onChange={setFreeze} />
              <div className="desc">자동 삭제 사용(use Auto Close)</div>
            </div>
          </div>
        </div>
      </div>
      <div className="detail">
        <div className="header">
          <div className="title">지속시간</div>
          <p>Toast가 화면에 보여지는 시간을 설정합니다. 컨텐츠가 사용자에게 전달될수 있도록 고려하고 너무 오랜 시간 남아있지 않도록 조정합니다.</p>
        </div>
        <div className="be-segment border">
          <div className="contents">
            <BeInputNumber value={timeout} onChange={setUseTimeout} min={1000} step={1000} />
          </div>
        </div>
      </div>
      <div className="detail">
        <div className="header">
          <div className="title">Theme</div>
          <p>총 5가지 스타일의 테마를 제공합니다. 프로젝트 내에서 토스트의 역할에 따라 다른 스타일을 지정하여 사용자가 직관적으로 1차 역활을 확인 가능하도록 할 수 있습니다.</p>
        </div>
        <div className="be-segment border">
          <div className="contents btn-flex">
            {themes && themes.map(thm => (
                <button key={thm} className={`be-button ${thm === theme ? 'selected' : ''}`} onClick={() => setTheme(thm)}>{thm}</button>
            ))}
          </div>
        </div>
      </div>
      <div className="detail">
        <div className="header">
          <div className="title">Status / Colors</div>
          <p>알림 시스템에서 상태 표시는 중요한 역활을 합니다. 5개의 상태 표시를 통해 직관적인 상태를 표시합니다. 또한 지정된 상태 외 추가적인 상태 분류를 위해 지정된 생상으로 표시 가능합니다.</p>
        </div>
        <div className="be-segment border">
          <div className="contents btn-flex">
            {status && status.map(stat => (
              <button key={stat} className={`be-button ${stat === state ? state : ''}`} onClick={() => setState(stat)}>{stat}</button>
            ))}
            {colorList && colorList.map(color => (
              <button key={color} className={`be-button ${color === state ? state : ''}`} onClick={() => setState(color)}>{color}</button>
            ))}
          </div>
        </div>
      </div>
      <div className="detail">
        <div className="header">
          <div className="title">Position</div>
          <p>토스트가 화면에 표시 되는 위치를 설정합니다.</p>
        </div>
        <div className="be-segment border">
          <div className="contents btn-flex">
            {positions && positions.map(pos => (
              <button key={pos} className={`be-button ${pos === position ? 'selected' : ''}`} onClick={() => setPosition(pos)}>{pos}</button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Setting