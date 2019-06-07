// @flow

class Talk {
  subject: 'js' | 'ruby'

  constructor(subject) {
    this.subject = subject
  }

  getTalk = () => {
    return this.subject
  }
}

const rubyTalk = new Talk('ruby')
// rubyTalk.getTalk()
// const phpTalk: Talk = new Talk('php')
