const varBoolean = false;
const varNumber = 42;
const varString = 'insiter';
const varVoid = undefined;
const varNull = null;
const whatever = 1234; // literal example

const logMessageColor = severity => {
  switch (severity) {
    case 'info':
      return 'green';

    case 'warn':
      return 'yellow';

    case 'fatal':
      return 'red';
  }
};

logMessageColor("info"); // logMessageColor("foo");