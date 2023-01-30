// entry point: controller function
function getValues() {
    // get the value of the input and create variable to be used
    // as parameter in logic function
    let inputString = document.getElementById('userString').value;

    // create a variable to hold value returned in logic function 
    let reversedString = reverseAString(inputString);
    
    // after running logic function -- the returned value is used as
    // the paremeter in the display function
    displayString(reversedString);
}

// logic function
// reverse a string 
function reverseAString(userString) {
    // initialize a variable to represent the string reversed
    let revString = "";
    // loop through parameter value -- starting from last index
    for(i = userString.length - 1; i >= 0; i--) {
        // create a variable to repesent the current character i
        let currentLetter = userString[i];
        // add the current i value to our initialized variable 
        revString += currentLetter;
    }
    // return the new string
    return revString ;
}

// view function
function displayString(reversedString) {
    // get the element that will hold the value of the new string from the document
    // and make the string the text 
    document.getElementById('results').textContent = reversedString;
    // remove the invisible class from the parent element so the user can see new string
    document.getElementById('alert').classList.remove('invisible');
}