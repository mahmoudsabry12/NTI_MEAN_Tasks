// Day1 Task 1

//     let number;
  
//       const input = prompt("Enter a number between 0 and 100:");
      
//       number = Number(input);
      

//       if (!isNaN(number) && number >= 0 && number <= 100) {
       
//         console.log(number) ;
//       } else {
      
//         alert("Invalid input. Please enter a number between 0 and 100.");
//       }    
  
 
//   alert(`You entered: ${input}`);



//===========================================================================================
// Day1 Task 2
// let grade = 50;
//   if( grade >= 90 && grade <= 100){
//     console.log("Your Grade is : A")
//   }else if(grade >= 80 && grade < 90){
//     console.log("Your Grade is : B")
//   }
//   else if(grade >= 70 && grade < 80){
//     console.log("Your Grade is : C")
//   }
//   else if(grade >= 60 && grade < 70){
//     console.log("Your Grade is : D")
//   }else{
//     console.log("Your Grade is : F")
//   }


//===========================================================================================
 // Day1 Task 3

//  function handleValue(score) {
//     switch (true) {

//         case score >= 90 && score <= 100:
//             console.log( 'A');
//         return ; 

//         case score >= 80 && score < 90:
//             console.log( 'B');
//         return ;

//         case score >= 70 && score < 80:
//             console.log( 'C');
//         return ;

//         case score >= 60 && score < 70:
//             console.log( 'D');
//         return ;

//         default:
//             console.log( 'F');
//         return ;
//     }
// }

// handleValue(90)

//===========================================================================================
 // Day1 Task 4

//  const rows = 5; 

// for (let i = 1; i <= rows; i++) {
//     output = String(i).repeat(i)
//     console.log(output); 
// }


// const rows = 5; 
// let i = 1;
// while(i <= rows){
//  output = String(i).repeat(i)
//  console.log(output)
//  i++
// }

// do {
//     output = String(i).repeat(i)
//     console.log(output)
//     i++
// } while (i <= rows);



//===========================================================================================
 // Day1 Task 5

// let x = 5;
// let y=9;
// let z = 9;

// !(x === y || y === z || x === z) && console.log("No two variables are equal") ||
// (x === y && console.log("x and y are equal")) ||
// (y === z && console.log("y and z are equal")) ||
// (x === z && console.log("x and z are equal")) 


//===========================================================================================
 // Day1 Task 6

//  let score = 50;

//  score += 10;
//  console.log(score);
//  score -= 5;
//  console.log(score);
//  score *= 2;
//  console.log(score);
//  score /= 5;
//  console.log(score);

//===========================================================================================
// Day1 Task 7

//  let age = 5;

//     if (isNaN(age) || age < 0) {
//         console.log("Invalid input: Please enter a non-negative number.");
//   }  else if(age < 5){
//     console.log("Ticket Price: Free entry.");

//   }
//   else if(age <= 12){
//     console.log("Ticket Price: $10.");

//   }
//   else if(age <= 60){
    
//     console.log("Ticket Price: $20.");
// }else{
//     console.log("Ticket Price: $15.");

// }


//===========================================================================================
// Day1 Task 8

// let year = 2008;

// if (isNaN(year) || year < 0) {
//     console.log("Invalid input: Please enter a positive number.");

// } else if(year % 4 === 0){
//     console.log(year + " is a leap year.");
// }else{
//     console.log(year + " is not a leap year.");
// }


//===========================================================================================
// Day1 Task 9

// let n = 5;
// for (let i = 1; i <= 10; i++) {
//     console.log(`${n} x ${i} = ${n * i}`);
// }


//===========================================================================================
// Day1 Task 10


// let prime = 40;
// let isPrime ;

// for(let x = 2 ; x <= 50 ;x++){

//     for (let i = 2 ; i <= Math.sqrt(prime);i++ ){
    
//         if(prime % i === 0 ){
            
//            isPrime = "Not Prime";
//            break;
//         }else{
//             isPrime = "Prime"
//         }
//     }
// }
// console.log(isPrime)


//===========================================================================================
// Day1 Task 11

// let rows = 5;
// let pattern = "*"
// for (let i = rows ; i >= 1 ;i--){
//     let row = "";
//     for(let j = 1 ; j <=i ;j++){
//         row += pattern
//     }
//     console.log(row)
// }



//===========================================================================================
// Day1 Task 12


// for( let i = 1 ; i<= 50;i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log(`${i} is FizzBuzz`)
        
//     } else if(i % 3 === 0){
//         console.log(`${i} is Fizz`)
//     } else if(i % 5 === 0){
//         console.log(`${i} is Buzz`)
//     }
// }

// Challenge
// for( let i = 1 ; i<= 50;i++){
//    (i % 3 === 0 && i % 5 === 0 ) && console.log(`${i} is FizzBuzz`) ||
//    (i % 3 === 0) &&  console.log(`${i} is Fizz`) ||
//    (i % 5 === 0) &&  console.log(`${i} is Buzz`)
// }


