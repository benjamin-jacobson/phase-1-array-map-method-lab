const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


function titleCased(sent){
  let newArr = []
  const splitSentence = sent.split(' ')
  for (let str of splitSentence){
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    newArr.push(str2)
  }
  let text = newArr.join(' ')
  return text
}

const outputs = tutorials.map(titleCased)


// getSentence("i like books.")
console.log(outputs)