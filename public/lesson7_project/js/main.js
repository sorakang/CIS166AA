var students = [
    ['Sora', 98],
    ['Juniper', 85],
    ['Natalie', 73],
    ['Alice', 82],
    ['Miso', 77]
]
var letterGrade = '';
var msg = '';
var text = '';

function getGrade(x) {
    if (x > 89) {
        letterGrade = 'A';
    } else if (x > 79 && x < 90) {
        letterGrade = 'B';
    } else if (x > 69 && x < 80) {
        letterGrade = 'C';
    } else {
        letterGrade = 'F';
    }
    return letterGrade;
}

for (i = 0; i < students.length; i++) {
    var innerArrayLength = students[i].length;
    for (var j = 0; j < innerArrayLength; j++) {
        // console.log('[' + i + ',' + j + '] = ' + students[i][j]);
        text = students[i][1];
        msg = students[i][0] + '\'s number grade is ' + students[i][1] + ' and letter grade is ' + getGrade(text);
    }
    document.getElementById('result').innerHTML += msg + '<br>';
}
