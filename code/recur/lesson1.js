export default (str) => {
  // 保存所有符合条件的IP地址
  let r = []
  // 分四步递归处理ip地址
  let search = (cur, sub) => {
    // 非法输入过滤，leetCode测试用例
    if (sub.length > 12) {
      return
    }
    // 边界条件
    if (cur.length === 4 && cur.join('') === str) {
      r.push(cur.join('.'))
    } else {
      // 还没分完。正常处理情况
      // 如果剩下的数字不到3个了，就按照剩下的循环；否则按照三位循环
      for (let i = 0, len = Math.min(3, sub.length), tmp; i < len; i++) {
        // 取出从0开始，i+1长度的子串，也就是1~len的子串
        tmp = sub.substr(0, i + 1)
        // 对取出的子串验证是否合法
        if (tmp - 256 < 0) {
          // 将这个合法的数字格式化（去掉前面的0），递归调用，进行下一次
          search(cur.concat([tmp * 1]), sub.substr(i + 1))
        }
      }
    }
  }
  // 第一次调用
  search([], str)
  return r
}
