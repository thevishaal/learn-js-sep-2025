const name = "vishal"
const repoCount = 50

// console.log(name + repoCount + "value");

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('vishal-vb-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('l'));

const newString = gameName.substring(0,4)
// console.log(newString);

const anotherString = gameName.slice(-8,4)
// console.log(anotherString);

const newStringOne = "        vishal     "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://github.com/thevishaal%20learn-js-sep-2025"
// console.log(url.replace('%20','/'))
// console.log(url.includes('sundar'));

// console.log(gameName.split('-'));

const str = "The quick brown fox jumps over the lazy dog"

const words = str.split(" ")
// console.log(words);  // all words
// console.log(words[3]); // all words up to index 3
// console.log(words.length);

const chars = str.split("")
// console.log(chars);
// console.log(chars[8]); // all char up to index 8

const strCopy = str.split()
console.log(strCopy);

const word = str.split(" ",4)
console.log(word);

const paragraph = "I think Ruth's dog is cuter than your dog!";
const rep = paragraph.replaceAll("dog","monkey")
// console.log(rep);
// console.log(paragraph);

const regx = /dog/gi;
console.log(paragraph.replaceAll(regx,"flutter"));

const searchTerm = "dog"
console.log(`Index of the last ${searchTerm} is ${paragraph.lastIndexOf(searchTerm)}`)

