// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]
// let array = [1, 4, 11, 2, 37, -4]
// let array = []

// Write your solution below:
let counter = 0;
while (counter < array.length)
for (i = 0; i < array.length; i++){
    if (array[counter] + array[i] === 0){
        console.log("true");
    } 
}