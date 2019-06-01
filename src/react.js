// @flow

import React, { Component } from 'react'
import type { Talk, Author } from './types'

type Props = {|
  talk: Talk,
  foo: string
|}

type State = {
  likes: number
}

class ConferenceTalk extends Component<Props, State> {
  state = {
    likes: 42
  }

  render() {
    const { likes } = this.state
    const { talk } = this.props

    return (
      <div>
        <h2>
          {talk.subject} by {talk.author.name}
        </h2>
        <p>Duration: {talk.duration} minutes</p>
        <p>It has {likes} likes</p>
      </div>
    )
  }
}

const buildComponent = (foo: string) => {
  const matias: Author = { name: 'Matias', age: 33, tech: ['js', 'ruby', 'go'] }
  const talk: Talk = { subject: 'JS Types', duration: 30, author: matias }

  return <ConferenceTalk talk={talk} foo={foo} />
}
