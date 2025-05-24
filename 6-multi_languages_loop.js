const messages = [
    "C is fun",
    "Python is cool",
    "JavaScript is amazing"
  ];
  
  let outputString = '';
  

  for (const message of messages) {
    
    outputString += message + '\n';
  }
  
  outputString = outputString.trimEnd();
  console.log(outputString);