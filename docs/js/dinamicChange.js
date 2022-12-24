const wrapper = document.getElementById("wrapper");
// const wrapper2 = document.getElementById("wrapper2");


function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const uniqueRand = (min, max, prev) => {
  if (wrapper.matches(':hover')) return;
  let next = prev;
  
  while(prev === next) next = rand(min, max);
  
  return next;
}

const combinations = [
  { configuration: 1, roundness: 1 },
  { configuration: 1, roundness: 2 },
  { configuration: 1, roundness: 4 },
  { configuration: 2, roundness: 2 },
  { configuration: 2, roundness: 3 },
  { configuration: 3, roundness: 3 },
  { configuration: 4, roundness: 5 },
  { configuration: 4, roundness: 1 },
  { configuration: 4, roundness: 2 },
  { configuration: 4, roundness: 3 }
];

let prev = 0;
// let prev2 = 0;

setInterval(() => {
  let combination
  const index = uniqueRand(0, combinations.length - 1, prev)
  combination = combinations[index];
  
  wrapper.dataset.configuration = combination.configuration;
  wrapper.dataset.roundness = combination.roundness;
  
  prev = index;
}, 2500);

// setInterval(() => {
//   let combination
//   const index = uniqueRand(0, combinations.length - 1, prev2)
//   combination = combinations[index];
  
//   wrapper2.dataset.configuration = combination.configuration;
//   wrapper2.dataset.roundness = combination.roundness;
  
//   prev2 = index;
// }, 2000);