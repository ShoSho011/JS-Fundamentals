const firstArgument = process.argv[2];

const parsedNumber = parseInt(firstArgument);

if (isNaN(parsedNumber)) {
  
  console.log("Not a number");
} else {
  
  console.log(`My number: ${parsedNumber}`);
}