const aString: string = "I am a string";
console.log(aString);
//chatAt() returns chat at index
console.log("char at index 0 is: ", aString.charAt(0));
//concat() concats strings
//indexOf() returns index of first occurrence of given char
console.log("Index of 'a' is: ", aString.indexOf('a'));
//lastIndexOf() returns index of last occurrence of a given char
console.log("Index of last occurrence of 'a' is: ", aString.lastIndexOf('a'));
//match returns an array with info regarding matches found in string
console.log("matching: ", aString.match('am'));

