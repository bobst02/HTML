let a2 = '0分'
let a1 = `你的
國文
分數為${a2}`
console.log(a1);
let a3 = '你的\n';
a3 += '數學\n';
a3 += '分數為' + a2;
console.log(a3);
let n1 = 10;
let n2 = 2;
let s1 = '1';
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
//字串+數字 ---> 字串+字串
console.log(s1 + n1);
//判斷
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr[9]);
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2) {
    console.log(arr[i] + '是奇數');
  }
}
let r = 5;
let o1 = r * r * 3.14;
console.log(o1);
let o2 = r ** 2 * 3.14;
console.log(o2);