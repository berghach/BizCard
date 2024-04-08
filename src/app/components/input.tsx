'use client';
import React from 'react'

interface InputProps {
  label: string,
  type: string,
  id: string,
  name: string

}

const input = (props: InputProps) => {
  return (
    <div>
      <label  htmlFor={props.id}>{props.label}</label>
      <input id={props.id} name={props.name} type={props.type} autoComplete='on' />
    </div>
  )
}

export default input
