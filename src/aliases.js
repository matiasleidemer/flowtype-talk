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

// const matias: Author = { name: 'Matias', age: 32, tech: ['ruby', 'javascript'] };
const thiago: Author = { name: 'Thiago', age: 33, tech: ['javascript'] }

const talk: Talk = { subject: 'Flow', duration: 40, author: thiago }

// We can use a literal object instead of the type itself
const anotherTalk = {
  subject: 'Um menimo chamado Javascripto',
  duration: 30,
  author: {
    name: 'Juliana Negreiros',
    age: 25,
    tech: ['js', 'ruby']
  }
}

const talkDurationInSeconds = (talk: Talk): number => {
  return talk.duration * 60
}

talkDurationInSeconds(anotherTalk)
// talkDurationInSeconds({ duration: 50 })
