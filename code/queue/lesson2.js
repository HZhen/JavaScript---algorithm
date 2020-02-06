export default (tasks, n) => {
  // 表示最终队列执行的结果
  let q = ''
  // 对归类进行存储
  let Q = {}
  tasks.forEach(item => {
    if (Q[item]) {
      Q[item]++
    } else {
      Q[item] = 1
    }
  })
  while (1) {
    // 任务清单
    let keys = Object.keys(Q)
    if (!keys[0]) {
      break
    }
    // 声明一个队列用来存储1+n任务单元
    let tmp = []
    for (let i = 0; i <= n; i++) {
      let max = 0
      let key
      let pos
      // 找到任务种类最多的
      keys.forEach((item, idx) => {
        if (Q[item] > max) {
          max = Q[item]
          key = item
          pos = idx
        }
      })
      // 判断当前任务是否存在
      if (key) {
        tmp.push(key)
        keys.splice(pos, 1)
        Q[key]--
        // 如果任务种类数为0就清楚这个任务
        if (Q[key] < 1) {
          delete Q[key]
        }
      } else {
        break
      }
    }
    q += tmp.join('').padEnd(n + 1, '-')
  }
  // 边界的处理，最后不要出现冷却时间
  q = q.replace(/-+$/g, '')
  return q.length
}
