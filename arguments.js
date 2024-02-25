function sum(a, b, c){
    // console.log(arguments[3]);
    const arg = [...arguments];
    console.log(arg);
    const result = a + b + c;
    return result;
}
const total =sum(45, 89, 12, 45);
console.log(total);
