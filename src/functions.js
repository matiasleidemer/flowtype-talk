// @flow

const sayHello = (name: string): string => {
  return `Hello ${name}`
}

sayHello("Matias");
// sayHello(1234);

const sayMyName = (name: ?string): string => {
  if (name) {
    return `You're ${name}`;
  } else {
    return "You're nameless";
  }
}

sayMyName("Heinsenberg");

const weirdSum = (a: number | string, b: number | string): number | string => {
  return a + b;
}

weirdSum("1", 1);
