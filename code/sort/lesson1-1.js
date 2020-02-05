export default (arr) => {
  // 冒泡排序
  let len = arr.length
  // 通过i来控制边界
  for (let i = len - 1, swap; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      swap = arr[j]
      if (swap > arr[j + 1]) {
        arr[j] = arr[j + 1]
        arr[j + 1] = swap
      }
    }
  }
  return arr
}
