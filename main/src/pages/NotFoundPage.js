import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate} from "react-router-dom"
const NotFoundPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(()=>{
        setTimeout(()=>{
            navigate("/dashboard")
            dispatch({
                type : "path",
                payload : "/dashboard"
            })
        }
        ,2000)
    },[])
  return (
    <div className='w-12/12 m-auto text-center'>
        <div className='w-10/12 m-auto'>
            <img src='https://4kwallpapers.com/images/walls/thumbs_3t/9410.jpg'/>
        </div>
    </div>
  )
}

export default NotFoundPage