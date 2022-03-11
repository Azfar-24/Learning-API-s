"use strict";
/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

// function fizzBuzz(no) {
//   // Write your code here
//   if (no % 3 === 0 && no % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (no % 3 === 0) {
//     console.log("Fizz");
//   } else if (no % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(no);
//   }
// }
// function next(num) {
//   for (let i = 1; i <= num; i++) {
//     fizzBuzz(i);
//   }
// }
// next(15);

// const arr = [-4, 3, -9, 6, 0, 1];
// const posi = arr.filter(num => num > 0);
// const nega = arr.filter(num => num < 0);
// const zero = arr.filter(num => (num === 0));
// console.log((posi.length / arr.length).toFixed(6));
// console.log((nega.length / arr.length).toFixed(6));
// console.log((zero.length / arr.length).toFixed(6));

// let n1 = 0;
// let n2 = 1;
// const fibonacciSeries = function (num) {
//   console.log(n1);
//   console.log(n2);
//   for (let i = 0; i <= num; i++) {
//     const next = n1 + n2;
//     console.log(next);
//     n1 = n2;
//     n2 = next;
//   }
// };
// fibonacciSeries(10);
document.querySelector("main").innerHTML = ''
const containerData = document.querySelector("main");
const res = async function (API) {
  const data1 = await fetch(API);
  const data = await data1.json();
  const resources = data.data;
  // console.log(resources[0]);
  resources.forEach(res => {
    const html = `<div class="movie">
            <img src="${res.anime_img}" alt="" />
          <div class="name">
              <h3 class="heading">${res.anime_name}</h3>
          </div>
      </div>`;
    console.log(res);
    containerData.insertAdjacentHTML("beforeend", html);
  });
};
res("https://anime-facts-rest-api.herokuapp.com/api/v1");
