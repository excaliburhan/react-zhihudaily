import React from 'react'
import { ActivityIndicator } from 'antd-mobile'

export default function LoadingComponent({ isLoading, error }) {
  if (isLoading) {
    // Handle the loading state
    return (
      <div style={{ marginTop: '200px' }}>
        <ActivityIndicator text='Loading...' />
      </div>
    )
  } else if (error) {
    // Handle the error state
    return (
      <div style={{ marginTop: '200px', textAlign: 'center' }}>
        Sorry, there was a problem loading the page.
      </div>
    )
  } else {
    return null
  }
}
