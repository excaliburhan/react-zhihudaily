import React from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'antd-mobile'
import styles from './style.css'

class Slides extends React.Component {
  static propTypes = {
    list: PropTypes.array,
    index: PropTypes.number
  }

  render() {
    const { list } = this.props
    const slideImgs = list.map(item => {
      return (
        <a className={styles.slides} key={item.id} href={`#/story/${item.id}`}>
          <img
            className={styles.slidesImg}
            src={item.image}
            onLoad={() => {
              // fire window resize event to change height
              window.dispatchEvent(new Event('resize'))
            }}
          />
          <div className={`${styles.slidesTitle} u-ellipsis-2`}>{item.title}</div>
        </a>
      )
    })
    const dotStyle = {
      backgroundColor: 'rgba(136,136,136,0.7)'
    }
    const dotActiveStyle = {
      backgroundColor: '#fff'
    }
    return (
      <Carousel
        autoplay
        infinite
        selectedIndex={this.props.index}
        dotStyle={dotStyle}
        dotActiveStyle={dotActiveStyle}
      >
        {slideImgs}
      </Carousel>
    )
  }
}

export default Slides
