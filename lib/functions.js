const sayHello = name => {
  return `Hello ${name}`;
}; // sayHello('Matias')
// sayHello(1234)


const sayMyName = name => {
  if (name) {
    return `You're ${name}`;
  } else {
    return 'You have no name';
  }
}; // sayMyName('Heinsenberg')
// sayMyName()


const weirdSum = (a, b) => {
  return a + b;
};

weirdSum('1', 1);