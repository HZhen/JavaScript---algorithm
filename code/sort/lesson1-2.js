export default (arr) => {
  let len = arr.length
  for (let i = 0; i < len - 1; i++) {
    let min = arr[i]
    // 每轮需要比较的次数N-1
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < min) {
        let c = min
        min = arr[j]
        arr[j] = c
      }
    }
    arr[i] = min
  }
  return arr
}
