"use strict"
function Calculator(){
    this.read = function() {
        this.num1 = +prompt("숫자입력");
        this.num2 = +prompt("숫자입력");
    };
    this.sum = function(){
        return this.num1 + this.num2;
    };
    this.mul = function(){
        return this.num1 * this.num2;
    };

}

// let calculator = new Calculator();

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

function Accumulator(firstNum){
    this.value = firstNum;
    this.read = function() {
        this.addNum = +prompt("숫자입력");
        this.value += this.addNum;
    };
}

// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// alert(accumulator.value);


// console.log(user?.add);

// let str = "hello";
// str.test = 5;
// console.log(str.test);

// let num1 = +prompt("숫자를 입력 ");
// let num2 = +prompt("숫자를 입력 ");

// console.log(num1 + num2);


//숫자를 입력할 때까지 반복하기
function readNumber(){
    let num;
    do{
    num = +prompt("숫자입력");
    if(num === "" || num === null ){
        return null;
    }
    }while (!isFinite(num));
    return +num;
}

// A random number from min to max
function randomNumber(num1, num2){
    return Math.random() * (num2 - num1) + num1;
}

//console.log(randomNumber(1,5));

// /A random integer from min to max
function randomInteger(num1, num2){
    let result = Math.random() * (num2 - num1) + num1;
    return result.toFixed(0);
}

// console.log(randomInteger(1,5));

// let str = 'As sly as a fox, as strong as an ox';
// let target = 'as';
// let pos = 0;
// while(true){
//     let foundPos = str.indexOf(target,pos);
//     if(foundPos == -1) break;
//     console.log(`위치 : ${foundPos}`);
//     pos = foundPos + 1;
// }

// pos = -1;
// while((pos = str.indexOf(target, pos + 1)) != -1) {
//     console.log(`위치 : ${pos}`);
// }

function ucFirst(text){
    if(!text) return text;
    return text[0].toUpperCase() + text.slice(1);
}

// console.log(ucFirst("  test"));

function checkSpam(str){
    str = str.toLowerCase();
    return str.includes("viagra") || str.includes("xxx");
}

// console.log(checkSpam("buy vIaGra new"));
// console.log(checkSpam("free XxXxXX"));
// console.log(checkSpam("innocent rabbit"));

function truncate(str , maxNum){
    if(str.length > maxNum){ return str.slice(0, maxNum - 1) + "..."}
    return str;
}

// console.log(truncate("What I'd like to tell on this topic is:", 20));
// console.log(truncate("Hi everyone!", 20));

function extrackCurrencyValue(str){
    return +str.slice(1);
}   

// console.log(extrackCurrencyValue('$120'));
// let array = ["Jazz", "Blues"];
// array.push("Rock-n-Roll");
// array[((array.length -1) / 2).toFixed(0)] = "Classics";
// console.log(array.shift());
// console.log(array.unshift("Rap", " Reggae"));
// console.log(array);

function sumInput(){
    let array = [];
    let push;
    while(true){
        push = +prompt("숫자 입력");
        if( push == null || push == "" || isNaN(push)) break;
        array.push(push);
    }
    let sum = 0;
    for ( let value of array){
        sum += value;
    }
    return sum;
}

// console.log(sumInput());

function getMaxSubSum(arr){
    let maxSum = 0;
    let partialSum = 0;
    for(let item of arr){
        partialSum += item;
        maxSum = Math.max(maxSum, partialSum);
        if( partialSum < 0) partialSum = 0;
    }
    return maxSum;
}

// console.log(getMaxSubSum([-1, 2, 3, -9]));
// console.log(getMaxSubSum([2, -1, 2, 3, -9]));
// console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
// console.log(getMaxSubSum([-2, -1, 1, 2]));
// console.log(getMaxSubSum([100, -9, 2, -3, 5]));
// console.log(getMaxSubSum([1, 2, 3]));


function camelize1(str){
    let array = str.split("-");
    for(let i = 0; i < array.length; i++){
        array[i] = i == 0 ? array[i] : array[i][0].toUpperCase() + array[i].slice(1);
    }
    array = array.join("");
    return array;
}
// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition")); // i = 0 을 하지않으면 오류 뜸 

// 해답에 적힌 간단한 정답
function camelize(str){
    return str.split('-').map((word,index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('');
} 

// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));

function filterRange(arr, a, b){
    let resultArray = arr.filter(item => item >= a && item <= b);
    return resultArray;
}

// let arr = [5, 3, 8 ,1];
// let filtered = filterRange(arr, 1, 4);
// console.log(filtered);
// console.log(arr);

function filterRangeInPlace(arr, a, b){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < a || arr[i] > b){
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4);
// console.log(arr);

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a,b) => b - a);

// console.log(arr);

function copySorted(arr){
    return arr.slice().sort();
}

// let arr = ["html", "javascript", "css"];
// let sorted = copySorted(arr);

// console.log(sorted);
// console.log(arr);

function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }

//   let powerCalc = new Calculator;
//   powerCalc.addMethod("*", (a, b) => a * b);
//   powerCalc.addMethod("/", (a, b) => a / b);
//   powerCalc.addMethod("**", (a, b) => a ** b);
  
//   let result = powerCalc.calculate("2 ** 3");
//   console.log( result );

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map( item => item.name);

// console.log( names ); // John, Pete, Mary

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map(user /* item */ => ({
//     fullName : `${user.name} ${user.surname}`,
//     id : user.id,
// }));

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// console.log(( usersMapped[0].id )); // 1
// console.log(( usersMapped[0].fullName )); // John Smith


// function sortByAge(users){
//     users.sort((a,b) => a.age - b.age);
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// sortByAge(arr);

// // now: [john, mary, pete]
// console.log((arr[0].name)); // John
// console.log((arr[1].name)); // Mary
// console.log((arr[2].name)); // Pete

function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * ( i + 1));
        let t = array[i];
        array[i] = array[j];
        array[j] = t;
    }
    return array;
}

// console.log(shuffle([3, 5 , 7]));

function getAverageAge(users){
    // let sum = 0;
    // for(let value of users){
    //     sum += value.age;
    // }
    // return +(sum / users.length);
    return users.reduce((sum, value) => sum + value.age, 0) / users.length;
}

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };
// let arr = [ john, pete, mary ];
// console.log(getAverageAge(arr));

function unique(arr){
    let result = [];
    for (let value of arr){
        if(!result.includes(value)){
            result.push(value);
        }
    }
    return result;
}

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log(( unique(strings) )); 

function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }

// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
//   ];
  
//   let usersById = groupById(users);
//   console.log(usersById);