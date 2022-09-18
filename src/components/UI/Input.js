import React from 'react'

import classes from './Input.module.css'

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* Clever way of adding all the props to an element - use the spread operator */}
      <input ref={ref}{...props.input}></input>
    </div>
  )
})

export default Input
