const numericals = [10, 12, 5, 3]
const maxnum = numericals.reduce((acc, numerical) => (numerical > acc ? numerical:acc), numericals[0]);
console.log(maxnum);

