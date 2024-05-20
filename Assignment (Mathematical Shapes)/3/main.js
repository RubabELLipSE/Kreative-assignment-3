let pi = 3.14159265358979323846;

// Function to calculate the area of circle 
const findArea = (r) => (pi * r * r);

let radius, Area;
radius = 4;

// Function calling 
Area = findArea(radius);

// displaying the area 
console.log("Area of Circle is: " + Area);