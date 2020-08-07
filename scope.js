let bonus = 20 
function sum(num1, num2){
    const result = num1 + num2 + bonus;
    if(result > 10){
        let mood = 'happy';
        console.log(mood);
    }
    return result;
}
const output = sum(10, 20);
console.log(output);