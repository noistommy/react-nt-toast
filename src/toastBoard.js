import Toast from './toast'

class ToastBoard {
  constructor(options) {
    this.toastId = 0
    this.options = options
    this.board = null
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
    if (extendOption.closeButton) {
      closeEl = this.setClose()
      toastEl.appendChild(closeEl)
    }
    this.board.appendChild(toastEl)
    const interval = extendOption.freeze
      ? null
      : setTimeout(() => this.hideToast(toastEl, interval), extendOption.timeout)
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
  }
}

export default ToastBoard