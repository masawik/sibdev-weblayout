const OPEN_CLASSNAME = 'menu-plate_opened'

class sidebarController {
  constructor() {
    this.isOpened = false
    this.sidebar = document.querySelector('.menu-plate-js')
  }

  clickOutsideHandler = (event) => {
    if (!this.sidebar.contains(event.target)) {
      event.preventDefault()
      this.close()
    }
  }

  open = () => {
    if (this.isOpened) return
    this.sidebar.classList.add(OPEN_CLASSNAME)
    document.addEventListener('click', this.clickOutsideHandler)
    this.isOpened = true
  }

  close = () => {
    if (!this.isOpened) return
    this.sidebar.classList.remove(OPEN_CLASSNAME)
    document.removeEventListener('click', this.clickOutsideHandler)
    this.isOpened = false
  }

  toggle = () => {
    this.isOpened ? this.close() : this.open()
  }
}

(() => {
  const sideBar = new sidebarController()
  const toggleBtn = document.querySelector('.sidebar-toggle-btn-js')

  toggleBtn.addEventListener('click', () => {
    sideBar.toggle()
  })
})()