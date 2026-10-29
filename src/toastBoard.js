import Toast from './toast'

class ToastBoard {
  constructor(options) {
    this.toastId = 0
    this.options = options
    this.board = null
    this.intervals = new Set()
  }
  show(type, contents, options) {
    const extendOption = { position: 'bottom-right', timeout: 3000,...this.options, ...options }
    if (extendOption.snackbar) this.clear()

    this.toastId++
    this.board = this.getBoard(extendOption)

    const toastEl = new Toast(type, contents, extendOption).toast
    toastEl.dataset.timeout = extendOption.timeout
    toastEl.dataset.freeze = extendOption.freeze ? 'true' : 'false'
    toastEl.setAttribute("style", `--id: ${this.toastId}`)

    if (extendOption.closeButton) {
      const closeEl = this.setClose()
      closeEl.addEventListener('click', (e) => {
        e.stopPropagation()
        this.hideToast(toastEl)
      })
      toastEl.appendChild(closeEl)
    }
    this.board.appendChild(toastEl)
    // let interval = null
    if (!extendOption.freeze) {
      const interval = setTimeout(() => this.hideToast(toastEl, interval), extendOption.timeout)
      toastEl._interval = interval
      this.intervals.add(interval)
    }
    if (extendOption.clickToClose) {
      toastEl.addEventListener('click', () => {
        this.hideToast(toastEl)
      })
    }
  }
  getBoard(options) {
    let board = document.querySelector('.toast-board')
    if (board) {
      return board
    }
    board = document.createElement('div')
    board.classList.add('toast-board')
    board.classList.add(options.position)
    if (options.displayOnTop) {
      board.classList.add('on-top')
    }
    board.addEventListener('mouseenter', () => {
      this.stopAllTimeouts()
    })
    board.addEventListener('mouseleave', () => {
      this.resumeAllTimeouts()
    })
    document.body.appendChild(board)
    return board
  }
  setClose() {
    const closeButton = document.createElement('button')
    closeButton.classList.add('toast-close')
    closeButton.innerHTML = '<span>&times;</span>'
    return closeButton
  }
  hideToast(toast) {
    this.toastId--
    if (!toast || toast._isHiding) return
    toast._isHiding = true

    if (toast._interval) {
      clearTimeout(toast._interval)
      this.intervals.delete(toast._interval)
      toast._interval = null
    }

    toast.classList.remove('swing')

    let removed = false
    const done = () => {
      if (removed) return
      removed = true
      this.removeToast(toast)
    }

    toast.addEventListener('animationend', done, { once: true })
    toast.addEventListener('transitionend', done, { once: true })
    setTimeout(done, 600)
  }
  removeToast(toast) {
    toast.remove()
    if (this.board && this.board.querySelectorAll('.toast').length === 0) {
      this.clear()
    }
  }
  clearToast() {
    if (!this.board) return
    const toasts = this.board.querySelectorAll('.toast')
    toasts.forEach(t => {
      this.hideToast(t)
    })
  }
  clear() {
    if (this.board && this.board.parentNode) {
      this.board.remove()
      this.board = null
    }
    this.intervals.forEach(clearTimeout)
    this.intervals.clear()
  }
  stopAllTimeouts() {
    if (!this.board) return
    const toasts = this.board.querySelectorAll('.toast')
    toasts.forEach(t => {
      if (t._interval) {
        clearTimeout(t._interval)
        this.intervals.delete(t._interval)
        t._interval = null
      }
    })
  }
  resumeAllTimeouts() {
    if (!this.board) return
    const toasts = this.board.querySelectorAll('.toast')
    toasts.forEach((t) => {
      if (t.dataset.freeze === 'true' || t._interval || t._isHiding) return
      const timeout = Number(t.dataset.timeout) || this.options.timeout || 3000
      const timer = setTimeout(() => this.hideToast(t), timeout)
      t._interval = timer
      this.intervals.add(timer)
    })
  }
}

export default ToastBoard