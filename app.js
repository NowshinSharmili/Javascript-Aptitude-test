// 1. Return the Sum of Two Numbers

function addition(a,b){
    const sum  = a+b;
    return sum;
}
console.log(addition(2,3));
console.log(addition(-3, -6) );
console.log(addition(7, 3));

// ## 2. ****Convert Minutes into Seconds****

function convert(minutes){
    const second = minutes*60;
    return second;
}
console.log(convert(5));
console.log(convert(3));
console.log(convert(2));


function addition(int){
    return ++int;

}
console.log(addition(0));
console.log(addition(9));
console.log(addition(-3));

// 4. Area of a Triangle

function triArea(base,height){
    const area =1/2* base*height;
    return area;
}
console.log(triArea(3,2));
console.log(triArea(7, 4));
console.log(triArea(10, 10));



// 5. Return the First Element in an Array

    function getFirstValue([a,b,c]){
        return a;

    }
    console.log(getFirstValue([1, 2, 3]));
    console.log(getFirstValue([80, 5, 100]));
    console.log(getFirstValue([-500, 0, 50]));

    // 6. Convert Age to Days

    function calcAge(AgeInYears){
        const AgeInDays = AgeInYears*365;
        return AgeInDays;
    }
    console.log(calcAge(65) );
    console.log(calcAge(0));
    console.log(calcAge(20));

    // 7. Power Calculator

const circuitPower = (voltage,current) => {
    const circuitPower = voltage*current;
    return circuitPower;
}

console.log(circuitPower(230, 10) );
console.log(circuitPower(110, 3) );
console.log(circuitPower(480, 20) );


// ## 8. ****Maximum Edge of a Triangle****

const nextEdge = (side1,side2) => {
    const maxThird = (side1 + side2) - 1 ;
    return maxThird;
}
console.log(nextEdge(8, 10) );
console.log(nextEdge(5, 7) );
console.log(nextEdge(9, 2) );



// 9. Return the Remainder from Two Numbers

const remainder = (firstNum,secondNum) => {
    const remainder = firstNum %  secondNum;
    return remainder;
}
console.log(remainder(1, 3) );
console.log(remainder(3, 4) );
console.log(remainder(-9, 45));
console.log(remainder(5, 5) );


// 10. Return Something to Me!
const giveMeSomething = (a) =>{
    return "something " + a;
}
console.log(giveMeSomething("is better than nothing") );
console.log(giveMeSomething("Bob Jane"));
console.log(giveMeSomething("something"));


// 11. Correct the Mistakes
const squared = (a) =>{
    const squared = a*a;
    return squared;
}
console.log(squared(5));
console.log(squared(9));
console.log(squared(100));


// 12. Is the Number Less than or Equal to Zero?
function lessThanOrEqualToZero(int){
    if (int <= 0) {
       return true;
    }else{
        return false;
    }
}
console.log(lessThanOrEqualToZero(5));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-2));


// 13. Sum of Polygon Angles
function sumPolygon(n){
    if (n <= 2) {
        alert("n must be greater than 2");
    }else{
        const totalSum = (n - 2) * 180 ;
        return totalSum;
    }
}
console.log(sumPolygon(3) );
console.log(sumPolygon(4) );
console.log(sumPolygon(6));


// 14. Basic Variable Assignment
function nameString(name){
    const result = name + "Coder";
    return result;
}
console.log(nameString("Mubashir"));
console.log(nameString("Matt"));
console.log(nameString("javaScript"));

// 15. Less Than 100?

function lessThan100(a,b){
    const sum = a + b;
    if (sum < 100) {
        return true;
    }else{
        return false;
    }
}
console.log(lessThan100(22, 15));
console.log(lessThan100(83, 34) );
console.log(lessThan100(3, 77));