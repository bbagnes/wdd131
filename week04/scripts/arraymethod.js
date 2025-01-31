
const steps = ["one", "two", "three"];
const listTemplate= function(step) {
  return `<li>${step}</li>`;
}

const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join();

const grades = ['A', 'B', 'A'];
const getGpa= function(grade) {
    let points = 0;

    if (grade == 'A') {
        points = 4;
    } else if (grade == 'B') {
        points = 3;
    }else if (grade == 'C') {
        points = 2;
    }else if (grade == 'D') {
        points = 1;
    }else if (grade == 'F') {
        points = 0;
    }
    return points;
}

const gpa = grades.map(getGpa);
let avgGpa = gpa.reduce((total, item) => total + item) / gpa.length;
console.log(avgGpa);

let fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
let fruitNameShort = fruits.filter(fruit => fruit.length < 6);
console.log(fruitNameShort[2]);

let numbers = [12, 34, 21, 54];
let luckyNumber = 21;
let goodLuck = numbers.indexOf(luckyNumber);
console.log(goodLuck);

