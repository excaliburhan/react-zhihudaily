import React from 'react'
import LoadingBar from '@/components/Loading/LoadingBar'

export default function LoadingComponent({ isLoading, error }) {
  if (isLoading) {
    // Handle the loading state
    return (<LoadingBar />)
  } else if (error) {
    // Handle the error state
    return (
      <div style={{ paddingTop: '200px', textAlign: 'center' }}>
        Sorry, there was a problem loading the page.
      </div>
    )
  } else {
    return null
  }
}
