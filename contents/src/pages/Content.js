import React,{useState,useEffect} from 'react'
import { dataForm } from './data/dataForm'
import DynamicForm from '../components/Form/DynamicForm';
import ZilogTable from '../components/Table/ZilogTable';
import { API, config } from '../config/API';
import { useSelector, useDispatch } from 'react-redux';
export const Content = () => {
    const contents = useSelector((state) => state.contents);
    const dispatch = useDispatch()
    useEffect(()=>{
        API.get("/posts", config)
        .then((res) => {
           dispatch({
                type : "SetRenderData",
                payload : [res.data,contents.activePage,contents.perPage]
           })
        })
        .catch((error) => {
            console.error("Fetch error:", error);
        });
    },[])
  return (
    <div
    className='w-11/12 m-auto'
    >   
        {contents.renderData.length>0? <div>
            <ZilogTable
                data={{
                header:[
                    {"name":"No","type":"text","data":"id"},
                    {"name" :"Title","type":"text","data":"title"},
                    {"name" :"Desc","type":"text","data":"body"},
                ],
                body : contents.renderData
                }}
            />
        </div>:<p>Loading...</p>}
    </div>
  )
}
