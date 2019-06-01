// @flow

const varBoolean: boolean = false

const varNumber: number = 42

const varString: string = 'insiter'

const varVoid: void = undefined

const varNull: null = null

const whatever: any = 1234

// literal example
type Severity = 'info' | 'warn' | 'fatal'

const logMessageColor = (severity: Severity) => {
  switch (severity) {
    case 'info':
      return 'green'
    case 'warn':
      return 'yellow'
    case 'fatal':
      return 'red'
  }
}

logMessageColor("info");
// logMessageColor("foo");
