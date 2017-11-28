// @flow

class Talk {
  subject: "js" | "ruby";

  constructor(subject) {
    this.subject = subject;
  }
}

const rubyTalk: Talk = new Talk("ruby");
// const phpTalk: Talk = new Talk("php");
