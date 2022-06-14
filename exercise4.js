/*Calculate the sum of numbers within an array
You can create your own array of numbers but consider trying this problem with a few different sets to verify your solution.
Have one array with negative and positive numbers and another with integers and decimals.
You could also try using arrays of different lengths.
*/

list = [1, -2, 3.2, -4, 5, -6, 7, -8, 9]

count = input => {
    let total = 0
    for (let i = 0; i<input.length; i++){
        total++
    }
    console.log(total)
}

count(list)