function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';

class ConferenceTalk extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      likes: 42
    });
  }

  render() {
    const {
      likes
    } = this.state;
    const {
      talk
    } = this.props;
    return React.createElement("div", null, React.createElement("h2", null, talk.subject, " by ", talk.author.name), React.createElement("p", null, "Duration: ", talk.duration, " minutes"), React.createElement("p", null, "It has ", likes, " likes"));
  }

}

const buildComponent = foo => {
  const matias = {
    name: 'Matias',
    age: 33,
    tech: ['js', 'ruby', 'go']
  };
  const talk = {
    subject: 'JS Types',
    duration: 30,
    author: matias
  };
  return React.createElement(ConferenceTalk, {
    talk: talk,
    foo: foo
  });
};