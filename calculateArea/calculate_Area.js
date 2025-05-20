let length;
let width;

function calculateArea() {
    // **** parseFloat : converts the string value that user will input into a number ****
    // **** .value: retrieves value that is entered ****
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;

    // **** innerText: used to modify text and input text into the HTML element, in this case <p> ****
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}