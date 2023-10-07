
// Q1

// function findIndex( arr , tar){
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === tar) {
//            return i ;
//                 }
        
//     }

//     return -1;

// }

// const num = [1,2,3,4,5];

// const tr = 2;

// const ind = findIndex(num , tr);

// console.log("Index of  " + tr +" = " +ind );


// q2
 
// // Function to find the missing number
// function findMissing(arr,N){
//     let i;
//     let temp = [];
//     for (i = 0; i <= N; i++) {
//               temp[i] = 0;
//           }
   
//           for (i = 0; i < N; i++) {
//               temp[arr[i] - 1] = 1;
//           }
   
//           let ans = 0;
//           for (i = 0; i <= N; i++) {
//               if (temp[i] == 0)
//                   ans = i + 1;
//           }
//           console.log(ans);
//   }
   
//   // Driver code
//           let arr = [ 1, 3, 7, 4, 6, 5 ];
//           let n = arr.length;
   
//           // Function call
//          findMissing(arr,n);
   

// // q3

// let arr = [1,2, 1, 3, 4,5,4]; 
  
// function removeDuplicates(arr) { 
//     return [...new Set(arr)]; 
// } 
  
// console.log(removeDuplicates(arr));


// // q4

// const arr = [1, 2, 3, 4, 5,6];
// var sum = 0;
// for (var number of arr) {
//     sum += number;
// }
// average = sum / arr.length;
// console.log(average);


// // q5
// 1. Using a for Loop:

// function power(arr) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//       result.push(Math.pow(2, arr[i]));
//     }
//     return result;
//   }
  
//   const inputArray = [1, 2, 3];
//   const resultFor = power(inputArray);
//   console.log(resultFor); // Output: [2, 4, 8]



//   2. Using forEach Method:

//   function power(arr) {
//     const result = [];
//     arr.forEach(function (num) {
//       result.push(Math.pow(2, num));
//     });
//     return result;
//   }
  
//   const inputArray = [1, 2, 3];
//   const resultForEach = power(inputArray);
//   console.log(resultForEach); // Output: [2, 4, 8]


// 3. Using map Method:

//   function power(arr) {
//     return arr.map(function (num) {
//       return Math.pow(2, num);
//     });
//   }
  
//   const inputArray = [1, 2, 3];
//   const resultMap = power(inputArray);
//   console.log(resultMap); // Output: [2, 4, 8]



// // q6

// function classifyNumbers(arr) {
//     return arr.map(function (value) {
//       if (typeof value === 'number') {
//         return value % 2 === 0 ? 'even' : 'odd';
//       } else {
//         return 'N/A';
//       }
//     });
//   }
  
//   const inputArray = [1, 2, 3, "Rawan"];
//   const result = classifyNumbers(inputArray);
//   console.log(result); // Output: ['odd', 'even', 'odd', 'N/A']



// q7
// 1. Using map Method:

// function fizzbuzz(numbers) {
//     return numbers.map(function (number) {
//       if (number % 3 === 0 && number % 5 === 0) {
//         return 'Fizz Buzz';
//       } else if (number % 3 === 0) {
//         return 'Fizz';
//       } else if (number % 5 === 0) {
//         return 'Buzz';
//       } else {
//         return number;
//       }
//     });
//   }
  
//   const inputArr = [1, 2, 3, 4, 5, 15,20,25];
//   const outputArr = fizzbuzz(inputArr);
//   console.log(outputArr);


// 2. Using forEach Method:

// function fizzbuzz(numbers) {
//     const outputArray = [];
  
//     numbers.forEach(function (number) {
//       if (number % 3 === 0 && number % 5 === 0) {
//         outputArray.push('Fizz Buzz');
//       } else if (number % 3 === 0) {
//         outputArray.push('Fizz');
//       } else if (number % 5 === 0) {
//         outputArray.push('Buzz');
//       } else {
//         outputArray.push(number);
//       }
//     });
  
//     return outputArray;
//   }
  
//   const inputArray = [1, 2, 3, 4, 5, 15,20,25];
//   const outputArray = fizzbuzz(inputArray);
//   console.log(outputArray);

  
  

// // ex 7

// const arr = ["Rawan", "Jafar", "Hind", "Muhammad", "Esraa", "Dareen"];
// const Names = [];

// arr.forEach(function (name) {
//   Names.push(name);
// });

// console.log(Names);
  
  

// // ex 8



//  1. Use forEach() 



// function projectSeries(series) {
//     const result = [];
  
//     series.forEach(function (item) {
//       const projection = {
//         id: item.id,
//         title: item.title,
//       };
  
//       result.push(projection);
//     });
  
//     return result;
//   }
  
//   const seriesData = [
//     {
//       "id": 70111470,
//       "title": "Die Hard",
//       "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//       "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//       "rating": [4.0],
//       "bookmark": [],
//     },
//     {
//       "id": 654356453,
//       "title": "Bad Boys",
//       "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//       "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//       "rating": [5.0],
//       "bookmark": [{ id: 432534, time: 65876586 }],
//     },
//     {
//       "id": 65432445,
//       "title": "The Chamber",
//       "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
//       "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//       "rating": [4.0],
//       "bookmark": [],
//     },
//     {
//       "id": 675465,
//       "title": "Fracture",
//       "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
//       "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//       "rating": [5.0],
//       "bookmark": [{ id: 432534, time: 65876586 }],
//     }
//   ];
  
//   const projectedData = projectSeries(seriesData);
//   console.log(projectedData);


// // ex 9

//  2. Use map() 



// function projectSeries(series) {
//     return series.map(function (item) {
//       return {
//         id: item.id,
//         title: item.title,
//       };
//     });
//   }
  
//   const newSeries = [
//     {
//       "id": 70111470,
//       "title": "Die Hard",
//       "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//       "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//       "rating": [4.0],
//       "bookmark": [],
//     },
//     {
//       "id": 654356453,
//       "title": "Bad Boys",
//       "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//       "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//       "rating": [5.0],
//       "bookmark": [{ id: 432534, time: 65876586 }],
//     },
//     {
//       "id": 65432445,
//       "title": "The Chamber",
//       "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
//       "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//       "rating": [4.0],
//       "bookmark": [],
//     },
//     {
//       "id": 675465,
//       "title": "Fracture",
//       "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
//       "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//       "rating": [5.0],
//       "bookmark": [{ id: 432534, time: 65876586 }],
//     }
//   ];
  
//   const projectedArray = projectSeries(newSeries);
//   console.log(projectedArray);



// // ex 10

//  3. Use  filter and map() 




// function filterAndProjectSeries(newSeries) {
//     return newSeries
//       .filter(function (item) {
//         // Filter series with a rating under 5
//         return item.rating[0] < 5.0;
//       })
//       .map(function (item) {
//         // Project into {id, title} pairs
//         return {
//           id: item.id,
//           title: item.title,
//         };
//       });
//   }
  
//   const newSeries = [
//     {
//       "id": 70111470,
//       "title": "Die Hard",
//       "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//       "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//       "rating": [4.0],
//       "bookmark": []
//     },
//     {
//       "id": 654356453,
//       "title": "Bad Boys",
//       "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//       "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//       "rating": [5.0],
//       "bookmark": [{ id: 432534, time: 65876586 }]
//     },
//     {
//       "id": 65432445,
//       "title": "The Chamber",
//       "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
//       "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//       "rating": [4.0],
//       "bookmark": []
//     },
//     {
//       "id": 675465,
//       "title": "Fracture",
//       "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
//       "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//       "rating": [5.0],
//       "bookmark": [{ id: 432534, time: 65876586 }]
//     }
//   ];
  
//   const filteredAndProjectedArray = filterAndProjectSeries(newSeries);
//   console.log(filteredAndProjectedArray);



// // ex 11

// const arr = ["Java", "JavaScript", "Python", "C++", "PHP"];

// const longestString = arr.reduce(function (longest, currentString) {
//   // Compare the length of the current string with the longest string found so far
//   if (currentString.length > longest.length) {
//     return currentString; // Update the longest string
//   } else {
//     return longest; // Keep the current longest string
//   }
// });

// console.log(longestString);


// // ex 12


// let pokemonData =[
//     {
//       "game_index": 76,
//       "version": {
//         "name": "red",
//         "url": "https://pokeapi.co/api/v2/version/1/"
//       }
//     },
//     {
//       "game_index": 76,
//       "version": {
//         "name": "blue",
//         "url": "https://pokeapi.co/api/v2/version/2/"
//       }
//     },
//     {
//       "game_index": 76,
//       "version": {
//         "name": "yellow",
//         "url": "https://pokeapi.co/api/v2/version/3/"
//       }
//     },
//     {
//       "game_index": 132,
//       "version": {
//         "name": "gold",
//         "url": "https://pokeapi.co/api/v2/version/4/"
//       }
//     },
//     {
//       "game_index": 132,
//       "version": {
//         "name": "silver",
//         "url": "https://pokeapi.co/api/v2/version/5/"
//       }
//     },
//     {
//       "game_index": 132,
//       "version": {
//         "name": "crystal",
//         "url": "https://pokeapi.co/api/v2/version/6/"
//       }
//     },
//     {
//       "game_index": 132,
//       "version": {
//         "name": "ruby",
//         "url": "https://pokeapi.co/api/v2/version/7/"
//       }
//     },
//     {
//       "game_index": 132,
//       "version": {
//         "name": "sapphire",
//         "url": "https://pokeapi.co/api/v2/version/8/"
//       }
//     },
//     {
//       "game_index": 132,
//       "version": {
//         "name": "emerald",
//         "url": "https://pokeapi.co/api/v2/version/9/"
//       }
//     },
//     {
//       "game_index": 132,
//       "version": {
//         "name": "firered",
//         "url": "https://pokeapi.co/api/v2/version/10/"
//       }
//     },
//     {
//       "game_index": 132,
//       "version": {
//         "name": "leafgreen",
//         "url": "https://pokeapi.co/api/v2/version/11/"
//       }
//     },
//     {
//       "game_index": 132,
//       "version": {
//         "name": "diamond",
//         "url": "https://pokeapi.co/api/v2/version/12/"
//       }}];






  
//   function displayName(data) {
//     return data.reduce(function (names, item) {
//       if (item.version && item.version.name) {
//         names.push(item.version.name);
//       }
//       return names;
//     }, []);
//   }
  
//   const characterNames = displayName(pokemonData);
//   console.log(characterNames);




// // ex 13


// What is the output of the following JS code segments? and Why?

// a)

// var employee = {
//     firstName: 'Rawan',
//     sayHi: function(){
//         console.log("Hi Coach ! " + this.firstName);
//     }
// }

// employee.sayHi() // Hi Coach ! Rawan


// b)


// var employee = {
//     firstName: 'Rawan',
//     info: {
//         hasCar: true,
//         hasPet: true
//     },
//     printInfo: function(){
//         console.log("Car owner? " + this.hasCar);
//     }
// }

// employee.printInfo() // Car owner? true



// c) 

// var employee = {
//     firstName: 'Rawan',
//     info: {
//         hasCar: true,
//         hasPet: true,
//         printAddress: function(){
//             return this.data.address;
//         },
//         data: {
//             address: "Zarqa"
//         }
//     },
// }

// employee.info.printAddress() // Zaraq


// Because of the use method this

