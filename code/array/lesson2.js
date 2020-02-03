export default (arr) => {
  // 对这副牌进行排序，升序，降序都可以
  arr.sort((a, b) => a - b)
  let min = Number.MAX_SAFE_INTEGER
  let dst = []
  let result = true
  if (arr.length > 1) {
    for (let i = 0, len = arr.length, tmp = []; i < len; i++) {
      tmp.push(arr[i])
      for (let j = i + 1; j < len - 1; j++) {
        // 当相邻的下标相等时，则向tmp数组push i+1下标的值
        // 不相等时，则把临时变量数组tmp保存在dst数组中
        if (arr[i] === arr[j]) {
          tmp.push(arr[j])
        } else {
          if (min > tmp.length) {
            min = tmp.length
          }
          // 数组是引用类型，所以用下面的方法开辟一个新的空间来拷贝tmp
          dst.push([].concat(tmp))
          // 用下面的方法清空数组才是最正确的
          tmp.length = 0
          i = j
          break
        }
      }
    }
    dst.every(item => {
      // 判断dst数组下标的值能否被正整数min取模运算除尽为0
      if (item.length % min !== 0) {
        result = false
        // 跳出循环
        return false
      }
    })
  } else {
    result = false
  }
  return result
}
