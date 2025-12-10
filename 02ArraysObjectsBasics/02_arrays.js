const marvel_heros = ["ironman", "hulk", "caption","thor","blackWidow", "hawkeye"];
const dc_heros = ["batman", "superman", "flash"];

marvel_heros.push(dc_heros);//  ==>  put array in array
//array can take any type so it take array in array 

//console.log(marvel_heros);

//console.log(marvel_heros[6][0])  ==> [6]for select array [0] for print 1st

const allHeros = marvel_heros.concat(dc_heros);//  ==>  for meage both array and write new array "concat"
//console.log(allHeros);

const allNewHeros = [...marvel_heros,...dc_heros]; // spread ...
//console.log(allNewHeros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(2);  //  ==>  flat means mearge all array in one {infinity} for depth infi for all 01234 
//console.log(real_another_array);



console.log(Array.isArray("jay"));
console.log(Array.from("jay"));
console.log(Array.from({name: "jay"}));

let score1 = 55;
let socre2 = 66;
let score3 = 88;
let score4 = 99;

console.log(Array.of(score1,socre2,score3,score4));
