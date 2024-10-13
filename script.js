// let input = document.getElementById('inputBox');
// let buttons = document.querySelectorAll('button')

// let string;


// let arr = Array.from('buttons')
// arr.forEach(button => {
//     button.addEventListener('click', (e) => {
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             input.value = string
//         }
//         string += e.target.innerHTML;
//         input.value = string;
//     })
// })












// Get the input box element
let inputBox = document.getElementById('inputBox');

// Get all button elements
let buttons = document.querySelectorAll('button');

// Initialize a variable to store the input string
let inputString = '';

// Convert the NodeList to an array
let buttonArray = Array.from(buttons);

// Loop through each button and add a click event listener
buttonArray.forEach(button => {
    button.addEventListener('click', (e) => {
        const target = e.target;

        // Check the content of the button clicked
        if (target.innerHTML === '=') {
            // Evaluate the expression and set the result in the input box
            try {
                inputString = eval(inputString);
                inputBox.value = inputString;
            } catch {
                inputBox.value = 'Error';
            }
        } else if (target.innerHTML === 'AC') {
            // Clear the input string and update the input box
            inputString = '';
            inputBox.value = inputString;
        } else if (target.innerHTML === 'DEL') {
            // Remove the last character from the input string
            inputString = inputString.slice(0, -1);
            inputBox.value = inputString;
        } else {
            // Append the clicked button's content to the input string
            inputString += target.innerHTML;
            inputBox.value = inputString;
        }
    });
});
