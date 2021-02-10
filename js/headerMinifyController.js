(() => {
  const MINIFIED_CLASS = 'header_minified'
  const DEFAULT_TOGGLE_POINT = 70
  const $main = document.querySelector('.main-js')
  const $header = document.querySelector('.header-js')
  const $headerTitle = $header.querySelector('.header__title-js')

  const headerTitleBottom = $headerTitle.getBoundingClientRect().bottom
  const togglePoint = headerTitleBottom > 0 ? headerTitleBottom : DEFAULT_TOGGLE_POINT
  const headerHeight = $header.clientHeight

  let isMinified = false

  document.addEventListener('scroll', () => {
    if (pageYOffset >= togglePoint) {
      $header.classList.add(MINIFIED_CLASS)
      $main.style.paddingTop = `${headerHeight}px`
      isMinified = true
    }

    if (pageYOffset <= togglePoint || pageYOffset === 0 && isMinified) {
      $main.style.paddingTop = ''
      $header.classList.remove(MINIFIED_CLASS)
      isMinified = false
    }
  })
})()