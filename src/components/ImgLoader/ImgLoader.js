import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.pcss'

class ImgLoader extends React.Component {
  static propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    title: PropTypes.string,
    source: PropTypes.string,
    image: PropTypes.string
  }

  render() {
    const { width, height, image, title, source } = this.props
    const imgStyle = {
      width: width || '100%',
      height: height || '200px'
    }
    return (
      <div className={styles.imgLoader} style={imgStyle}>
        <div className={`${styles['imgLoader-img']}`} style={imgStyle}>
          <img src={image} />
        </div>
        <h1 className={`${styles['imgLoader-title']} u-ellipsis-2`}>{title}</h1>
        <span className={`${styles['imgLoader-source']}`}>{source}</span>
      </div>
    )
  }
}

export default ImgLoader
