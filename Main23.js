// Problems for Sigma Developers.
// Q3.The Mirror Mirror : Imagine you have a String, and you need to Create a New String that is a Mirror Image of the Original. Write a Function that Appends the Reversed Version of the Original String to itself.
function mirrorMirror(str) {
    return str + str.split('').reverse().join('');
}
console.log(mirrorMirror("abc"));    // Output : "abccba".
console.log(mirrorMirror("hello"));  // Output : "helloolleh".
console.log(mirrorMirror("mad"));    // Output : "maddam".