import React from 'react'

const Button = props => {

  return (
    <button className={`md:w-1/2 lg:ml-20 justify-center mt-16 py-3 ${props.theme[0]} text-gray-200 hover:text-white rounded-xl lg:mt-16`}> {props.content} </button>
  )
}

export default Button