import React from 'react'
import PropTypes from 'prop-types'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import { storyDetail } from '@/redux/actions/story'
import styles from './style.css'
import persistedRoute from '@/components/PersistedRoute/PersistedRoute'
import LoadingBar from '@/components/Loading/LoadingBar'
import ImgLoader from '@/components/ImgLoader/ImgLoader'
import HammerBack from '@/components/HammerBack/HammerBack'
import loadcss from 'xp-loadcss'
import { replaceHttp } from '@/utils'

const mapState = state => ({ story: state.story })
const mapDispatch = { storyDetail }

@hot(module)
@connect(mapState, mapDispatch)
@persistedRoute
class Contents extends React.Component {
  constructor(props) {
    super(props)
    this.loadcss = this.loadcss.bind(this)
  }
  static propTypes = {
    match: PropTypes.object, // 路由
    story: PropTypes.object,
    storyDetail: PropTypes.func
  }

  loadcss(urls) {
    const tags = Array.prototype.slice.apply(document.getElementsByTagName('link'))
    const links = tags.map(item => item.href)
    urls.forEach(url => {
      url = replaceHttp(url) // 替换成https
      if (!links.includes(url)) {
        loadcss(url)
      }
    })
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.storyDetail(id)
  }
  componentDidUpdate(prevProps) {
    const { storyDetail } = this.props.story
    if (storyDetail.id && storyDetail !== prevProps.story.storyDetail) {
      this.loadcss(storyDetail.css)
    }
  }
  render() {
    const { body, title, image } = this.props.story.storyDetail
    const source = this.props.story.storyDetail.image_source
    const { storyDetailPending } = this.props.story
    const loadingJSX = <LoadingBar />
    const contentJSX = (
      <div className={styles.contents}>
        <ImgLoader title={title} source={source} image={image} />
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    )
    return (
      <HammerBack>
        {storyDetailPending ? loadingJSX : contentJSX}
      </HammerBack>
    )
  }
}

export default Contents
