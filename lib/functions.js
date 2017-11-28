const sayHello = name => {
  console.log(`Hello ${name}`);
};

sayHello("Matias");
// sayHello(1234);

const sayMyName = name => {
  if (name) {
    return `You're ${name}`;
  } else {
    return "You're nameless";
  }
};

sayMyName("Heinsenberg");

const weirdSum = (a, b) => {
  return a + b;
};

weirdSum("1", 1);