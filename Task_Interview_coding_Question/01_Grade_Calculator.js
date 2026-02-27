let grade;
let score = 85;

if (typeof score !== "number") {
    console.log("Invalid score. Please enter a valid number.");
    return;
}  
if (score < 0 || score > 100) {
    console.log("Invalid score. Please enter a number between 0 and 100.");
    return;
}     

if (score >= 90) {
    grade = "A";
} else if (score >= 80 && score < 90) {
    grade = "B";
} else if (score >= 70 && score < 80) {
    grade = "C";
} else {
    grade = "D";
}

console.log(`Score: ${score}, Grade: ${grade}`);