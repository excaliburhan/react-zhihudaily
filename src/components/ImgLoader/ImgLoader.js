import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'

class ImgLoader extends React.Component {
  static defaultProps = {
    imgStyle: { width: '100%', height: '200px' }
  }
  static propTypes = {
    imgStyle: PropTypes.object,
    title: PropTypes.string,
    source: PropTypes.string,
    image: PropTypes.string
  }

  render() {
    const { imgStyle, image, title, source } = this.props
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
