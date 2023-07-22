import React from 'react'

const HandleResponse = (props) => {
  return props.response.status > 299 ?(
  <div className='w-6/12 mt-10 m-auto bg-red-500 text-center h-10 rounded font-2xl flex items-center justify-center'>
    {props.response.message}
  </div>
  ):(
  <div className='w-6/12 bg-green-500 mt-10 m-auto text-center h-10 rounded font-2xl flex items-center justify-center'>
    {props.response.message}
  </div>
  )
}

export default HandleResponse