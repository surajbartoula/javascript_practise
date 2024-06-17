const textNode = document.createTextNode("The quick brown fox jumps over the lazy dog");
const searchString = "brown";

if (textNode.nodeValue.indexOf(searchString) !== -1) {
    console.log("The text node contains the string:", searchString);
} else {
    console.log("The text node does not contain the string:", searchString);
}