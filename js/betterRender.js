function betterRender() {
  setTimeout(() => {
    // 共插入的数据条数
    const total = 10000
    // 每次插入的数据条数
    const once = 20
    // 插入的次数
    const loopCount = Math.ceil(total / once)
    let countRender = 0
    const ul = document.createElement('ul')
    // 添加数据
    const add = () => {
      const fragment = document.createDocumentFragment()
      for (let i = 0; i < once; i++) {
        const li = document.createElement('li')
        li.innerText = Math.floor(Math.random() * total)
        fragment.appendChild(li)
      }
      ul.appendChild(fragment)
      countRender++
      loop()
    }
    function loop() {
      if (countRender < loopCount) {
        window.requestAnimationFrame(add)
      }
    }
    loop()
  }, 0)
}

