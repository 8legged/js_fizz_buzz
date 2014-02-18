for (var i = 1; i <= 131; i++) {
  if (i % 15 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else if (i % 7 === 0) {
    console.log('FizzBuzzSivv');
  } else {
    console.log(i);
  }
}
