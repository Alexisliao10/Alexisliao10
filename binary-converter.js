// Binary converter (failed)

function binaryConverter(number) {
  while (number >= 1) {
    let result = number % 2;
    number /= 2;
    console.log(result);
  }
}

binaryConverter(25);

// Test two decimal to binary converter (succeeded)

function binaryConverter(number) {
  let rem,
    step = 1;
  const result = [];

  while (number != 0) {
    rem = number % 2; // remainder
    result.unshift(rem);
    console.log(
      `Step ${step++}: ${number}/2, Remainder: ${rem} and Quotient = ${parseInt(
        number / 2
      )}`
    );
    number = parseInt(number / 2); // Divided by 2
  }

  console.log(`Your binary is: ${result.join("")}`);
}

binaryConverter(28);

// Decimal to Binary Converter using toString()

// Input

const decimal = 28;

// Converti to binary

const result = decimal.toString(2);

console.log(result);
