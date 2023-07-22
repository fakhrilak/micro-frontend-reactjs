import React from 'react'
import { API, config } from '../../config/API'
import {useDispatch } from 'react-redux';
const HandleDelet = (props) => {
    const dispatch = useDispatch()
    const HandleDelet = ()=>{
       API.delete(`/posts/${props.data.id}`,config)
       .then((res)=>{
            props.setHandleResponse({
                status : res.status,
                message : "success"
            })
            props.setController("res")
            dispatch({
                type : "DeletById",
                payload : props.data
            })
       })
       .catch((err)=>{
            props.setHandleResponse({
                status : err.response.status,
                message : "Faild"
            })
            props.setController("res")
       })
    }
  return (
    <div className='w-8/12 m-auto text-gray-300 mt-20'>
        <p>Are You Sure Want Delete?</p>
        <div
        className='w-11/12 m-auto flex gap-5 justify-end mt-5'
        >
            <button
            className='w-20 font-3xl bg-red-500 rounded'
            onClick={()=>HandleDelet()}
            >Yes</button>
            <button
            className='w-20 font-3xl bg-green-500 rounded'
            onClick={()=>props.setController("show")}
            >No</button>
        </div>
     </div>
  )
}

export default HandleDelet