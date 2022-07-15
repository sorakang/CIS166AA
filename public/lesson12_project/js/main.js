//create a global variable called result
var result;

//create a function called getLocation
function getLocation() {
//create a variable that sets the value of true if the browser is Chrome
    var isChrome = navigator && navigator.userAgent.includes('Chrome');
// console.log('isChrome: ', isChrome);

//create an if statement with the following condition: if geolocation and the browser is Chrome, are both true, then show current position. Additionally, display a message that says "You're using Chrome, so you're cool!"
    if (navigator.geolocation && isChrome) {
        navigator.geolocation.getCurrentPosition(showPosition);
        msg.innerHTML = 'You\'re using Chrome, so you\'re cool!'

//otherwise if the browser is not Chrome, then display a message that says "Youu're not on the cool list. Then display a link that will send the user to Chrome's download page."
    } else if (navigator.geolocation && !isChrome) {
        msg.innerHTML = 'You\'re not on the cool list. https://www.google.com/chrome/'

//if the above conditions are not met, then display a message that says "Geolocation is not supported by this browser."
    } else {
        msg.innerHTML = 'Geolocation is not supported by this browser.'
    }
}

//create a function that will output the position to HTML
function showPosition(position) {
    var a = position.coords.latitude;
    var b = position.coords.longitude;
    console.log('Your current position is ' + a.toFixed(2) + ', ' + b.toFixed(2) + '.');
    result.innerHTML = 'Your current position is ' + a.toFixed(2) + ', ' + b.toFixed(2) + '.';
}




