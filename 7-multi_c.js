
const numberOfOccurrencesStr = process.argv[2];

const numberOfOccurrences = parseInt(numberOfOccurrencesStr);

if (isNaN(numberOfOccurrences)) {
  
  console.log("Missing number of occurrences");
} else {
  
  let output = ''; 


  for (let i = 0; i < numberOfOccurrences; i++) {
    output += "C is fun\n";
  }

  output = output.trimEnd();

  console.log(output);
}