import React from 'react'

const Button = props => {

  return (
    <button className={`w-full justify-center py-3 ${props.theme[0]} text-gray-200 hover:text-white rounded-xl`}> {props.content} </button>
  )
}

export default Button