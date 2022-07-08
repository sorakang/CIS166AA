document.getElementById('options').addEventListener("change", function() {
    msg1.textContent = `You are ${this.value}.`;
})

signUp.addEventListener("click", function() {
    var firstName = fName.value;
    msg2.textContent = `Order for ${firstName}.`;
});

pizza.addEventListener("mouseover", function () {
    msg3.textContent = "This is a Pizza.";
});

box.removeEventListener("mousemove", function () {
    msg4.textContent = 'The mouse is moving';
});
