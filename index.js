// Day1 Task1
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
// Day1 Task two
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
 // Day1 Task three

 function handleValue(score) {
    switch (true) {

        case score >= 90 && score <= 100:
            console.log( 'A');
        return ; 

        case score >= 80 && score < 90:
            console.log( 'B');
        return ;

        case score >= 70 && score < 80:
            console.log( 'C');
        return ;

        case score >= 60 && score < 70:
            console.log( 'D');
        return ;

        default:
            console.log( 'F');
        return ;
    }
}

handleValue(90)