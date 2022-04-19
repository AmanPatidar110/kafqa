import React from 'react'
import classes from './Page.module.css'

function Page (props) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.bubble1}> </div>
      <div className={classes.bubble2}> </div>
      <div className={classes.bubble3}> </div>
      <div className={classes.glass}>{props.children}</div>
    </div>
  )
}

export default Page
