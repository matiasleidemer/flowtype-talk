// @flow

export type Author = {
  name: string,
  age: number,
  tech: Array<string>
}

export type Talk = {
  subject: string,
  duration: number,
  author: Author
}
