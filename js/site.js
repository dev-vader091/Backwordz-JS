// entry point: controller function
function getValues() {
    let inputString = document.getElementById('userString').value;

    
    let reversedString = reverseAString(inputString);
    
    displayString(reversedString);
}

// logic function
// reverse a string 
function reverseAString(userString) {
    // reverse the string
    // let revesedStringArray = [];
    let revString = "";
    // userString = userString.split('');
    for(i = userString.length - 1; i >= 0; i--) {
        let currentLetter = userString[i];

        revString += currentLetter;

    }




  return revString ;
}

// view function
function displayString(reversedString) {
    document.getElementById('results').textContent = reversedString;
    document.getElementById('alert').classList.remove('invisible');
}