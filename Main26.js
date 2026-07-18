// Problems for Sigma Developers.
// Q6.The Vowel Counter : You Need to Create a Function that Counts the Number of Vowels in a Given String. Consider Both Uppercase and Lowercase Vowels.
function vowelCounter(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        };
    };
    return count;
};
console.log(vowelCounter("Hello"));      // Output : 2
console.log(vowelCounter("JavaScript")); // Output : 3
console.log(vowelCounter("AEIOU"));      // Output : 5
console.log(vowelCounter("xyz"));        // Output : 0