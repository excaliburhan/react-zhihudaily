import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'
import LazyLoad from 'react-lazy-load'

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
        <LazyLoad className={styles['storyItem-lazy']} throttle={100} offset={600}>
          <img referrerPolicy='never' className={styles['storyItem-img']} src={item.images[0]} alt='' />
        </LazyLoad>
      </a>
    )
  }
}

export default StoryItem
