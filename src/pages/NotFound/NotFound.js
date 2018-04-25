import React from 'react'
import { hot } from 'react-hot-loader'
import HammerBack from '@/components/HammerBack/HammerBack'

class NotFound extends React.Component {
  render() {
    const notFoundStyle = {
      minHeight: '100vh',
      paddingTop: '200px',
      textAlign: 'center',
      fontSize: '40px'
    }
    return (
      <HammerBack>
        <div style={notFoundStyle}>404</div>
      </HammerBack>
    )
  }
}

export default hot(module)(NotFound)
