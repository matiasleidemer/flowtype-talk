

// const matias: Author = { name: 'Matias', age: 30, tech: ['ruby', 'javascript'] };
const thiago = { name: 'Thiago', age: 31, tech: ['javascript'] };

const talk = { subject: 'Flow', duration: 40, author: thiago

  // We can use a literal object instead of the type itself
};const anotherTalk = {
  subject: 'Managing and evolving JavaScript Code',
  duration: 40,
  author: {
    name: 'Jean Emer',
    age: 28,
    tech: ['react']
  }
};

const talkDurationInSeconds = talk => {
  return talk.duration * 60;
};

// talkDurationInSeconds(anotherTalk);
// talkDurationInSeconds({ duration: 50 });