// const matias: Author = { name: 'Matias', age: 32, tech: ['ruby', 'javascript'] };
const thiago = {
  name: 'Thiago',
  age: 33,
  tech: ['javascript']
};
const talk = {
  subject: 'Flow',
  duration: 40,
  author: thiago // We can use a literal object instead of the type itself

};
const anotherTalk = {
  subject: 'Um menimo chamado Javascripto',
  duration: 30,
  author: {
    name: 'Juliana Negreiros',
    age: 25,
    tech: ['js', 'ruby']
  }
};

const talkDurationInSeconds = talk => {
  return talk.duration * 60;
};

talkDurationInSeconds(anotherTalk); // talkDurationInSeconds({ duration: 50 })