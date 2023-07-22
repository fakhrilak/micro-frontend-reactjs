import React from 'react'

const HandleShow = (props) => {
  return (
    <div className='text-gray-300 mt-5 w-11/12 m-auto'>
        <p className='font-3xl'><strong>Title</strong></p>
        <div>
            <p>{props.data.title}</p>
        </div>
        <p className='font-3xl mt-5'><strong>Body</strong></p>
        <div>
            <p>{props.data.body}</p>
        </div>
    </div>
  )
}

export default HandleShow