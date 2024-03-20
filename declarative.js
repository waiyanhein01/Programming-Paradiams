const num = [3, 6, 5, 1, 3, 2, 5, 4]

console.log(num.reduce((pv,cv) => pv + cv ,0));
console.log(new Set(num));//duplicate
console.log(num.filter(el => el % 2 === 0));