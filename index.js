// Select an existing element on the page from html
const dom = document.querySelector("#dom");

// To modify the inner contents of an element
dom.innerText = "Modified text using .innertext";

// To create new element on the page
const newElement = document.createElement("div");

// To set the inner contents in the newElement
newElement.innerText = "This is newElement FOUR";

// How to display/show this newElement on page/browser
// => by appending this newElement as a child inside
// the body and we can appendChild to any element 
document.body.appendChild(newElement);

// How to set the class of an element using bootStrap
dom.className = "text-danger";

// How to set the inline styling of an element
newElement.style.backgroundColor = "violet";

/***
 * Styling Types
 * 1.) Use double curly braces{{}} and define 
 * css styles directly inside the function. "style"
 *  => "Inline Styling
 * 2.) we can create a variable called style (object)
 * and define our css styles inside the object.
 * Now this variable can be used inside the function
 * with single curly braces{} => "Internal Styling"
 * 3.) creating a css file to style the css and linking
 * to html is "External Styling"
 */

//getElementsByTagName: this gives html collection
//querySelectorAll : gives nodelist



// to create a button
const button = document.createElement("button");
button.innerText = "CLICK";
button.className = "btn btn-primary";
document.body.appendChild(button);

// to listen for the click event on a button
button.addEventListener("click", handleClick);
button .addEventListener("mouseover", handleClick);

function handleClick(){
    // To select multiple elements
// const divs = document.getElementsByTagName("div")
const divs = document.querySelectorAll("div")
//To loop through a collection to change text color
// for(const div of divs) {
//     div.style.color = "blue";
// }
// To get the contents of an input, access the value
divs.forEach((div) => (div.style.color = input.value));
}

// to create a text input
const input = document.createElement("input");
input.className = "form-control";
document.body.appendChild(input);