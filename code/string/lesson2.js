// 正则表达式匹配
// export default (str) => {
//   var count = 0
//   // 匹配条件
//   function match (s) {
//     let j = s.match(/(0+|1+)/)[0]
//     let o = (j[0]^1).toString().repeat(j.length)
//     let q = j + o
//     if (s.startsWith(q)) {
//       return true
//     } else {
//       return false
//     }
//   }

//   // 按顺序截取字符串，满足条件数量加1
//   for (let i = 0; i < str.length - 1; i++) {
//     var sub = match(str.slice(i))
//     if (sub) {
//       count++
//     }
//   }
//   return count
// }

/*
* @param {string} s
* @return {number}
*/
export default (str) => {
  // pre 前一个数字连续出现的次数，cur当前数组连续出现的次数，result结果子串个数
  let pre = 0
  let cur = 1
  let result = 0
  for (let i = 0, len = str.length - 1; i < len; i++) {
    // 判断当前数字是否与后一个数字相同
    if (str[i] === str[i + 1]) { // 相同，则当前数字出现的次数cur加1
      cur++
    } else { // 不同，则当前数字事实上变成了前一个数字，当前数字的次数重置为1
      pre = cur
      cur = 1
    }
    if (pre >= cur) { // 前一个数字出现的次数 >= 后一个数字出现的次数，则一定包含满足条件的子串
      result++
    }
  }
  return result
}
