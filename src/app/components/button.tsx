import React from 'react'

interface ButtonProps {
    className?: string,
    type: "submit" | "reset" | "button",
    label: string
}

const button = (props: ButtonProps) => {
  return (
    <div>
      <button className={props.className} type={props.type}>{props.label}</button>
    </div>
  )
}

export default button
