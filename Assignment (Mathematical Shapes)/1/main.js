
// Function to find the length of the
// diagonal of a square of a given side
function findDiagonal(s)
{
    return Math.sqrt(2) * s;
}
 
// Driver Code
var squareArea = 9;
 
console.log(findDiagonal(squareArea).toFixed(8));