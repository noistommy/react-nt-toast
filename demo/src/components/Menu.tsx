import { BeButtons, BeButton } from 'react-be-ui';
import {useEffect, useState} from 'react'
const buttons = [
  {icon: 'xi-sun', mode: 'light'},
  {icon: 'xi-moon', mode: 'dark'},
  {icon: 'xi-desktop', mode: 'system'},
]
const currentMode = sessionStorage.getItem('theme-mode')

function Menu () {
  const [mode, setMode] = useState(currentMode)

  useEffect(() => {
    changeTheme()
  }, [mode])
  const handleChange = (idx) => {
    const mode = buttons[idx].mode
    setMode(mode)
  }
  const changeTheme = () => {
    const html = document.documentElement;
    html.className = 'use-theme'
    html.classList.add(`${mode}-mode`);
    sessionStorage.setItem('theme-mode', mode)
  }
  return (
    <div className="menu-wrapper">
      <nav>
        <li>
          <BeButtons buttons={buttons} selectIndex={2} onChange={handleChange} />
        </li>
        <li>
          <BeButton icon="xi-github" link={'https://github.com/noistommy/react-nt-toast.git'} linkTarget="_blank" />
        </li>
      </nav>
    </div>
  )

}

export default Menu