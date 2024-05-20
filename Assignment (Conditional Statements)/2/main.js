// Define the lengths of the three sides of a triangle
var length1 = 5; 
var length2 = 6; 
var length3 = 7; 

// Calculate the semi-perimeter of the triangle
var s = (length1 + length2 + length3) / 2;

// Use Heron's formula to calculate the area of the triangle
var area = Math.sqrt(s * ((s - length1) * (s - length2) * (s - length3)));

// Log the calculated area to the console
console.log(area);