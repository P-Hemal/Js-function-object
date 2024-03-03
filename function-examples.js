function getAverage(assignment1, assignment2, assignment3){
    var total = assignment1 + assignment2 + assignment3;
    var average = total / 3;
    return average;
}
var average = getAverage(60, 58, 59);
console.log(average)