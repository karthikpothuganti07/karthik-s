// let tbody=document.querySelector('tbody');
// let url= 'http://127.0.0.1:5500/crud.html';
// let mobiles=[]

// function getmobiles(){
//    fetch(url)
//    .then(response=>{

//     console.log(response)
// //     mobiles=data
// //     updateTable()

//    }
// )
// }

// getmobiles();


function mainFunction(callback) {
   console.log("Performing operation...");
   // Use setTimeout to simulate an asynchronous operation
   setTimeout(function() {
     callback("Operation complete");
   }, 1000);
 }
 
 // Define the callback function
 function callbackFunction(result) {
   console.log("Result: " + result);
 }
 
 // Call the main function with the callback function
 mainFunction(callbackFunction);