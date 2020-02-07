export default (arr) => {
  // 处理每一圈的数据遍历过程
  let map = (arr, r = []) => {
    for (let i = 0, len = arr.length; i < len; i++) {
      // 判断是否为第一行
      if (i === 0) {
        r = r.concat(arr[i])
      // 判断是否为第二行
      } else if (i === len - 1) {
        r = r.concat(arr[i].reverse())
      // 当不为第一行和不为最后一行的时候
      } else {
        r.push(arr[i].pop())
      }
    }
    // 清除第一行
    arr.shift()
    // 清除最后一行
    arr.pop()
    // 执行左侧的数据遍历
    for (let i = arr.length - 1; i >= 0; i--) {
      r.push(arr[i].shift())
    }
    // 判断是否遍历完没有，如果没有则递归
    if (arr.length) {
      return map(arr, r)
    } else {
      return r
    }
  }
  return map(arr, [])
}
