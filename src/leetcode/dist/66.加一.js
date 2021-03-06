/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */
// @lc code=start
function plusOne(digits) {
    var temp = 0;
    var MAX = 10;
    var resultArr = [];
    digits[digits.length - 1] = digits[digits.length - 1] + 1;
    for (var i = digits.length - 1; i >= 0; i--) {
        digits[i] += temp;
        temp = 0;
        console.log(digits[i]);
        if (digits[i] >= MAX) {
            resultArr[resultArr.length] = digits[i] - MAX;
            temp = 1;
        }
        else {
            resultArr[resultArr.length] = digits[i];
        }
    }
    if (temp === 1) {
        resultArr[resultArr.length] = temp;
    }
    // eslint-disable-next-line no-plusplus
    for (var i = 0, j = resultArr.length - 1; i < j; i++, j--) {
        var t = resultArr[i];
        resultArr[i] = resultArr[j];
        resultArr[j] = t;
    }
    return resultArr;
}
// @lc code=end
