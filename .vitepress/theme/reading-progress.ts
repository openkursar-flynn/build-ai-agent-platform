/**
 * 顶部阅读进度条
 * 通过监听滚动事件,设置 CSS 变量 --reading-progress
 */
export function initReadingProgress() {
  if (typeof window === 'undefined') return

  const update = () => {
    const doc = document.documentElement
    const scrollTop = doc.scrollTop || document.body.scrollTop
    const scrollHeight = doc.scrollHeight - doc.clientHeight
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0
    doc.style.setProperty('--reading-progress', `${progress}%`)
  }

  window.addEventListener('scroll', update, { passive: true })
  window.addEventListener('resize', update)
  update()
}
