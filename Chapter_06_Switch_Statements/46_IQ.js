let testScore = 85;
switch (true) {
    case (testScore >= 95):
        console.log("Grade: AOutstanding- Top Performer");
        break;
    case (testScore >= 85 && testScore < 95):
        console.log("Excellent- Great Job");
        break;
    case (testScore >= 70 && testScore < 85):
        console.log("Good- Keep Improving");
        break;
    default:
        console.log("Grade: D");
}