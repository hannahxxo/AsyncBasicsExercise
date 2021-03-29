// ASYNC BASICS EXERCISE
// 1
let name1 = "Falcon";
function falconName() {
  console.log(`Question 1`);
  console.log(name1);
}
function falcon(n, callback) {
  setTimeout(() => {
    name1 = n;
    callback(n)
  }, 1000);
}
falcon(`Sam Wilson`);
falconName();

// 2
let name2 = "Winter Soldier";
function winterSoldierName() {
  console.log(`Question 2`);
  console.log(name2);
}
function winterSoldier(n) {
    return new Promise((resolve, reject) => {
  setTimeout(() => {
    name2 = n;
  }, 2000);
}
winterSoldier(`Bucky Barnes`)
    .then(winterSoldierName);

// 3
let name3 = "Agent 13";
function agent13Name() {
  console.log(`Question 3`);
  console.log(name3);
}
function agent13(n){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            name3 = n;
        }, 3000);
    })
}
agent13('Sharon Carter');
agent13Name();