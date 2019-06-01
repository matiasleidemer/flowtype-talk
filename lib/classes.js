function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Talk {
  constructor(subject) {
    _defineProperty(this, "subject", void 0);

    this.subject = subject;
  }

}

const rubyTalk = new Talk('ruby'); // const phpTalk: Talk = new Talk('php')