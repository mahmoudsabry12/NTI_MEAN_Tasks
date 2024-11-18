// Day1 Task 1
// function getNumberInput() {
//     let number;
  
//       const input = prompt("Enter a number between 0 and 100:");
      
//       number = Number(input);
      

//       if (!isNaN(number) && number >= 0 && number <= 100) {
       
//         return number;
//       } else {
      
//         alert("Invalid input. Please enter a number between 0 and 100.");
//       }
    
//   }
 
//   const userInput = getNumberInput();
//   alert(`You entered: ${userInput}`);



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

