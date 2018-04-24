import React from 'react'
import PropTypes from 'prop-types'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import styles from './style.pcss'
import loadcss from 'xp-loadcss'
import { storyDetail } from '@/redux/actions/story'
import ImgLoader from '@/components/ImgLoader/ImgLoader'

class Contents extends React.Component {
  static propTypes = {
    match: PropTypes.object, // 路由
    story: PropTypes.object,
    storyDetail: PropTypes.func
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.storyDetail(id)
  }
  componentDidUpdate(prevProps) {
    if (this.props.story.storyDetail !== prevProps.story.storyDetail) {
      if (!this.props.story.storyDetailLoad) {
        let cssUrls = this.props.story.storyDetail.css
        cssUrls = cssUrls.map(url => url.replace(/^http/, 'https')) // 替换成https
        loadcss(cssUrls)
      }
    }
  }
  render() {
    const { body, title, image } = this.props.story.storyDetail
    const source = this.props.story.storyDetail.image_source
    return (
      <div className={styles.contents}>
        <ImgLoader title={title} source={source} image={image} />
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    )
  }
}

export default hot(module)(connect(state => ({ story: state.story }), { storyDetail })(Contents))
