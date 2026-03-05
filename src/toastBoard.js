import Toast from './toast'

class ToastBoard {
  constructor(options) {
    this.toastId = 0
    this.options = options
    this.board = null
    this.intervals = []
  }
  show(type, contents, options) {
    const extendOption = { ...this.options, ...options }
    if (extendOption.snackbar) {
      this.clear()
    }
    let closeEl = null
    this.toastId++
    this.board = this.getBoard(extendOption)

    const toastEl = new Toast(type, contents, extendOption).toast
    toastEl.dataset.timeout = extendOption.timeout
    toastEl.dataset.freeze = extendOption.freeze ? 'true' : 'false'
    toastEl.setAttribute("style", `--id: ${this.toastId}`)
    if (extendOption.closeButton) {
      closeEl = this.setClose()
      toastEl.appendChild(closeEl)
    }
    this.board.appendChild(toastEl)
    let interval = null
    if (!extendOption.freeze) {
      interval = setTimeout(() => this.hideToast(toastEl, interval), extendOption.timeout)
      toastEl._interval = interval
      this.intervals.push(interval)
    }
    if (extendOption.clickToClose) {
      toastEl.addEventListener('click', () => {
        this.hideToast(toastEl, interval)
      })
    }
    if (extendOption.closeButton && closeEl) {
      closeEl.addEventListener('click', () => {
        this.hideToast(toastEl, interval)
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
  hideToast(toast, interval) {
    this.toastId--
    if (interval) {
      clearTimeout(interval)
      this.intervals = this.intervals.filter(i => i !== interval)
    }
    if (toast._interval === interval) {
      toast._interval = null
    }
    toast.classList.remove('swing')
    toast.addEventListener('transitionend', () => {
      this.removeToast(toast)
      clearTimeout(interval)
    })
  }
  removeToast(toast) {
    toast.remove()
    if (!this.toastId) {
      this.clear()
    }
  }
  clearToast() {
    if (!this.board) return
    const toasts = this.board.querySelectorAll('.toast')
    toasts.forEach(t => {
      this.hideToast(t, null)
    })
  }
  clear() {
    if (this.board && this.board.parentNode) {
      this.board.remove()
      this.board = null
    }
    this.toastId = 0
    this.intervals.forEach(interval => clearTimeout(interval))
    this.intervals = []
  }
  stopAllTimeouts() {
    if (!this.board) return
    const toasts = this.board.querySelectorAll('.toast')
    toasts.forEach(t => {
      if (t._interval) {
        clearTimeout(t._interval)
        this.intervals = this.intervals.filter(i => i !== t._interval)
        t._interval = null
      }
    })
  }
  resumeAllTimeouts() {
    if (!this.board) return
    const toasts = this.board.querySelectorAll('.toast')
    toasts.forEach((t, i) => {
      if (t.dataset.freeze === 'true') return
      if (t._interval) return
      // const timeout = Number(t.dataset.timeout) || this.options.timeout
      const timeout = 1000 + (i * 200)
      let interval = null
      interval = setTimeout(() => this.hideToast(t, interval), timeout)
      t._interval = interval
      this.intervals.push(interval)
    })
  }
}

export default ToastBoard