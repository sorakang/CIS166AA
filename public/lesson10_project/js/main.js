//create a function that will validate form input


//validate all the elements of the form
document.addEventListener("submit", function (e) {
    var firstName = fName.value;
    var myAddress = address.value;
    var myCity = city.value;
    var myState = state.value;
    var myZip = zipCode.value;
    if (firstName == '' || myAddress == '' || myCity == '' || myState == '' || myZip) {
        alert('Please fill out all fields');
    } else {
        alert('Successfully submitted!')
    }
    var canSubmit = true;
    var elements = document.getElementById("myForm").elements.array;
    for (var i = 0; elements.length; i++) {
        console.log(elements[i].value);
        if (elements[i].value == '') {
            canSubmit = false;
        } else {
            canSubmit = true;
        }
    }
    e.preventDefault()
});

//create a variable called canSubmit and set it to a boolean of true


//write a for loop that checks the value of each form field. If the form field is not completed, then canSubmit will be false


//in an event listener, add a method to prevent default submission of the form.
//create an alert if form is submitted that states a confirmation message
//make sure this event listener contains code to reset the form
