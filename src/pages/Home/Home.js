import React from 'react'
import PropTypes from 'prop-types'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import { storyList, beforeList, storyRefresh } from '@/redux/actions/story'
import styles from './style.css'
import { PullToRefresh, ActivityIndicator } from 'antd-mobile'
import HeaderBar from '@/components/HeaderBar/HeaderBar'
import Slides from '@/components/Slides/Slides'
import Story from '@/components/Story/Story'
import { throttle } from 'xp-utils'
import { formatDay } from '@/utils'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '今日热闻',
      bgColor: '#2591D0',
      opacity: 0,
      height: document.documentElement.clientHeight
    }
    this.onScroll = throttle(this.onScroll, 100).bind(this)
  }
  static propTypes = {
    story: PropTypes.object,
    storyList: PropTypes.func,
    beforeList: PropTypes.func,
    storyRefresh: PropTypes.func
  }

  // 动态改变headBar的内容
  onScroll() {
    let opacity = 0
    const rect = this.refs.wrap.getBoundingClientRect()
    const top = Math.abs(rect.top)
    const bottom = rect.bottom
    // 无限滚动计算
    if (bottom < this.state.height + 200) {
      this.onLoadMore()
    }
    // 透明度计算
    if (top >= 200) {
      opacity = 1
    } else {
      opacity = Number((top / 200).toFixed(2))
    }
    // 标题计算
    let refKeys = []
    for (const key in this.refs) {
      if (this.refs.hasOwnProperty(key)) {
        if (key !== 'wrap') {
          refKeys.push(key)
        }
      }
    }
    let refArr = []
    let titleArr = []
    refKeys.forEach((key, idx) => {
      const keyRef = this.refs[key]
      const keyRect = keyRef.getBoundingClientRect()
      const keyTitle = keyRef.getAttribute('data-date')
      if (idx === 0) {
        refArr.push(keyRect.height + 200)
      } else {
        refArr.push(keyRect.height + refArr[idx - 1])
      }
      titleArr.push(keyTitle)
    })
    let titleIdx = 0
    refArr.forEach((height, idx) => {
      if (top > height) {
        titleIdx = idx + 1 // 需要+1
      }
    })
    this.setState({ title: titleIdx === 0 ? '今日热闻' : titleArr[titleIdx] })
    this.setState({ opacity })
  }
  // 无限加载
  onLoadMore() {
    const { storyDate, beforeListPending } = this.props.story
    console.log(storyDate, beforeListPending)
    if (!storyDate || beforeListPending) return
    this.props.beforeList(storyDate)
  }
  // 下拉刷新
  onPullDown() {
    this.props.storyRefresh()
  }

  componentDidMount() {
    this.props.storyList()
    window.addEventListener('scroll', this.onScroll, true)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, true)
  }
  render() {
    const { title, bgColor, opacity } = this.state
    const { storyList, beforeList, storyRefreshPending } = this.props.story
    const topStories = storyList.top_stories
    const stories = storyList.stories
    const topDate = storyList.date
    const loadingJSX = (
      <div style={{ padding: '200px 0 20px' }}>
        <ActivityIndicator text='Loading...' />
      </div>
    )
    const moreJSX = (
      <div style={{ padding: '20px 0' }}>
        <ActivityIndicator text='Loading...' />
      </div>
    )
    const beforeJSX = beforeList.map((item, index) => {
      return (
        <div ref={`story${index + 1}`} key={index} data-date={formatDay(item.date)}>
          <Story date={formatDay(item.date)} list={item.stories} />
        </div>
      )
    })
    const mainJSX = (
      <div className={styles.homeBox}>
        <HeaderBar title={title} bgColor={bgColor} opacity={opacity} />
        <PullToRefresh
          id='pull'
          style={{
            height: this.state.height,
            overflow: 'auto'
          }}
          onRefresh={() => {
            this.onPullDown()
          }}
          distanceToRefresh={50}
          refreshing={storyRefreshPending}
        >
          <div className={styles.homeWrap} ref='wrap'>
            <Slides list={topStories} index={topStories.length - 1} />
            <div ref='story0' data-date={formatDay(topDate)}>
              <Story list={stories} />
            </div>
            {beforeJSX}
            {moreJSX}
          </div>
        </PullToRefresh>
      </div>
    )
    return <div className={styles.home}>{topDate ? mainJSX : loadingJSX}</div>
  }
}

export default hot(module)(
  connect(state => ({ story: state.story }), { storyList, beforeList, storyRefresh })(Home)
)
