import React from 'react'
import Page from '../Page/Page'

function Home () {
  return (
    <Page>
      <div style={{ height: '75vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ fontSize: '4rem', color: '#E3006B', fontWeight: 'bold' }}>
          Hello World
        </p>
      </div>
    </Page>
  )
}

export default Home
