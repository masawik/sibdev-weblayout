(() => {
  if (innerWidth >= 1440) return
  const MINIFIED_CLASS = 'header_minified'
  const $main = document.querySelector('.main-js')
  const $header = document.querySelector('.header-js')
  const $headerTitle = $header.querySelector('.header__title-js')

  const headerTitleBottom = $headerTitle.getBoundingClientRect().bottom
  const headerHeight = $header.clientHeight
  const togglePoint = pageYOffset === 0 ? headerTitleBottom : headerTitleBottom + pageYOffset

  let isMinified = false

  document.addEventListener('scroll', () => {
    if (pageYOffset >= togglePoint) {
      $header.classList.add(MINIFIED_CLASS)
      $main.style.paddingTop = `${headerHeight}px`
      isMinified = true
    }

    if (pageYOffset <= togglePoint && isMinified) {
      $main.style.paddingTop = ''
      $header.classList.remove(MINIFIED_CLASS)
      isMinified = false
    }
  })
})()