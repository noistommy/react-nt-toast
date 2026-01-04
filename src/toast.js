import { statusIcon, statusIconSolid } from './toastIcons'

// const statusIcon = {
//   success: 'check-circle',
//   info: 'info-circle',
//   danger: 'exclamation-circle',
//   warning: 'exclamation-triangle',
//   important: 'star'
// }

class Toast {
  constructor(type, msg, options) {
    this.type = type
    this.msg = msg
    this.options = options
    this.interval = null
    this.toast = null
    this.icon = null
    this.closeButton = null
    this.notify()
  }

  notify() {
    this.toast = document.createElement('div')
    this.toast.classList.add('toast', 'swing')
    // const contents = document.createElement('div')

    const contents = this.setContents()
    this.setIcon()
    if (this.options.round) {
      this.toast.classList.add('round')
    }
    if (this.options.theme === 'light') {
      this.toast.classList.add(`${this.type}`, `light`)
    } else if (this.options.theme === 'icon') {
      this.icon?.classList.add(`${this.type}-text`)
    } else if (this.options.theme === 'icon-bg') {
      this.icon?.classList.add(`${this.type}`)
    } else if (this.options.theme === 'line') {
      this.toast.classList.add(`line-left`)
      contents.classList.add(`${this.type}-border`)
    } else {
      this.toast.classList.add(`${this.type}`)
    }

    contents.classList.add('toast-contents')
    this.toast.appendChild(contents)
    // this.interval = setTimeout(() => this.hide(), this.options.timeout)
    return this.toast
  }
  // hide() {
  //   this.toast.classList.remove('swing')
  //   this.toast.addEventListener('transitionend', () => {
  //     this.toast.remove()
  //     clearTimeout(this.interval)
  //   })
  // }

  
  setIcon() {
    if (!this.options.useIcon || this.options.theme === 'line') return
    this.icon = document.createElement('div')
    this.icon.classList.add('toast-icon')
    const iconClass = statusIconSolid[this.type] || statusIconSolid['info']
    this.icon.innerHTML = iconClass
    // this.icon.innerHTML = `<i class="fa fa-${iconClass}" />`
    // this.icon.innerHTML = `<img src="./icons/success.svg" />`
    // this.toast.appendChild(this.icon)
    this.toast.appendChild(this.icon)
  }
  setContents() { 
    const contents = document.createElement('div')
    const title = document.createElement('div')
    title.classList.add('title', 'ellipsis')
    const description = document.createElement('div')
    if (typeof this.msg === 'string') {
      description.innerHTML = this.msg
      contents.appendChild(description)
    } else {
      if (this.options.useTitle) {
        title.innerHTML = this.msg.title
        contents.appendChild(title)
      }
      description.innerHTML = this.msg.description
      contents.appendChild(description)
    }
    return contents
  }
}

export default Toast