import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'

class StoryItem extends React.Component {
  static propTypes = {
    item: PropTypes.object
  }

  render() {
    const { item } = this.props
    return (
      <a className={styles.storyItem} href={`#/story/${item.id}`}>
        <div className={styles['storyItem-title']}>
          <span className='u-ellipsis-3'>{item.title}</span>
        </div>
        <img className={styles['storyItem-img']} src={item.images[0]} alt='' />
      </a>
    )
  }
}

export default StoryItem
