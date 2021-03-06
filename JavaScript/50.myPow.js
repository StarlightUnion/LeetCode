// Created by wxc on 2020/05/11

// 50.Pow(x, n)
// 实现 pow(x, n) ，即计算 x 的 n 次幂函数。

// 示例 1:
// 输入: 2.00000, 10
// 输出: 1024.00000

// 示例 2:
// 输入: 2.10000, 3
// 输出: 9.26100

// 示例 3:
// 输入: 2.00000, -2
// 输出: 0.25000
// 解释: 2^-2 = 1/2^2 = 1/4 = 0.25

// 说明:
// -100.0 < x < 100.0
// n 是 32 位有符号整数，其数值范围是 [−2^31, 2^31 − 1] 。


// 递归
// time: 72ms(51.58%) cache: 33.8MB(96.30%)
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0) return 1;
  if (n < 0) return 1 / myPow(x, -n);
  if (n % 2) return x * myPow(x, n - 1);
  return myPow(x * x, n / 2);
};


// 迭代
// time: 76ms(33.75%) cache: 33.9MB(92.59%)
var myPow = function(x, n) {
    if (n === 0) return 1;
    if (n < 0) {
      x = 1 / x;
      n = -n;
    }

    let res = 1;
    while(n) {
      if (n % 2) res *= x;
      x *= x;
      n = parseInt(n / 2);
    }

    return res;
  };

console.log(myPow(2.00000, -2));