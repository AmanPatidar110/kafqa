import React, { useEffect, useState } from 'react'
import Page from '../Page/Page'
import classes from './Counter.module.css'

function Counter () {
  const [count, setCount] = useState(0)
  const [customStyle, setCustomStyle] = useState()

  useEffect(() => {
    if (count < 5) setCustomStyle({ backgroundColor: 'red' })
    else if (count > 100) setCustomStyle({ backgroundColor: 'green' })
    else setCustomStyle({ backgroundColor: '#5B2C70' })
  }, [count])

  return (
    <Page>
      <div className={classes.counter}>
        <div
          className={classes.minus}
          onClick={() => setCount(prev => prev - 1)}
        >
          -
        </div>
        <div className={classes.count} style={{ ...customStyle }}>
          {' '}
          {count}{' '}
        </div>
        <div
          className={classes.plus}
          onClick={() => setCount(prev => prev + 1)}
        >
          +
        </div>
      </div>
    </Page>
  )
}

export default Counter
