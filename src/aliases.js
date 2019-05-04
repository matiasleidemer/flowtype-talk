// @flow

type Author = {
  name: string,
  age: number,
  tech: Array<string>
}

type Talk = {
  subject: string,
  duration: number,
  author: Author
}

// const matias: Author = { name: 'Matias', age: 30, tech: ['ruby', 'javascript'] };
const thiago: Author = { name: 'Thiago', age: 31, tech: ['javascript'] }

const talk: Talk = { subject: 'Flow', duration: 40, author: thiago }

// We can use a literal object instead of the type itself
const anotherTalk = {
  subject: 'Managing and evolving JavaScript Code',
  duration: 40,
  author: {
    name: 'Jean Emer',
    age: 28,
    tech: ['react']
  }
}

const talkDurationInSeconds = (talk: Talk): number => {
  return talk.duration * 60
}

// talkDurationInSeconds(anotherTalk);
// talkDurationInSeconds({ duration: 50 });
