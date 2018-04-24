import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.pcss'
import StoryItem from './StoryItem'

class Story extends React.Component {
  static propTypes = {
    date: PropTypes.string,
    list: PropTypes.array
  }

  render() {
    const { date, list } = this.props
    let dateJSX = null
    if (date) {
      dateJSX = <div className={styles.storyDate}>{date}</div>
    }
    const listJSX = list.map(item => {
      return <StoryItem item={item} key={item.id} />
    })
    return (
      <div className={styles.story}>
        {dateJSX}
        {listJSX}
      </div>
    )
  }
}

export default Story
