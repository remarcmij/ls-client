import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

class Dictionary extends React.Component {
  static async getInitialProps() {
    const res = await axios(`${process.env.BACKEND_URL}/api/dictionary/completion?term=apa`)
    return res.data
  }

  render() {
    const { completions } = this.props
    if (!completions) {
      return null
    }

    return (
      <div>
        <div>Loading data from {process.env.BACKEND_URL}</div>
        This is the dictionary page.
        {completions.map(completion => (
          <p key={`${completion.word}:${completion.lang}`}>
            {completion.word}, {completion.lang}
          </p>
        ))}
      </div>
    )
  }
}

Dictionary.propTypes = {
  completions: PropTypes.array,
}

export default Dictionary
