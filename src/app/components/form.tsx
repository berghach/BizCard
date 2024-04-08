import React from 'react'

interface FormProps {
    formLabel: string
    action: string
    method: string
    children: React.ReactNode
}

const form = (props: FormProps) => {
  return (
    <div>
      <h1>{props.formLabel}</h1>
      <form action={props.action} method={props.method}>
        {props.children}
      </form>
    </div>
  );
}

export default form
