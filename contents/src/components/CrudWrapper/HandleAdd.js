import React,{useState,useEffect} from 'react'
import { datahandleEdit } from './dataHandleEdit';
import DynamicForm from '../Form/DynamicForm';
import Joi from 'joi';
import {useDispatch } from 'react-redux';
import { API, config } from '../../config/API';
const HandleAdd = (props) => {
    const [newItem, setNewItem] = useState(datahandleEdit);
    const dispatch = useDispatch()

    const schema = Joi.object({
        title: Joi.string().min(10).max(50).required(),
        body: Joi.string().min(100).max(1000).required(),
    })

    const OnSubmit=()=>{
        let data = {}
        for(let i=0;i<newItem.length;i++){
            data[newItem[i]["name"]]=newItem[i]["value"]
        }
        const validationResult = schema.validate(data, { abortEarly: false });
        if (validationResult.error) {
            let validationErrors = {};
            validationResult.error.details.forEach((err) => {
              validationErrors[err.path[0]] = err.message;
            });

            const updatedNewItem = newItem.map((item) => ({
              ...item,
              err: validationErrors[item.name] || '',
            }));

            setNewItem(updatedNewItem)
        }else{
            const updatedNewItem = newItem.map((item) => ({
                ...item,
                err: '',
            }));
            setNewItem(updatedNewItem)
            API.post("/posts",data,config)
            .then((res)=>{
                props.setHandleResponse({
                    status : res.status,
                    message : "success"
                })
                console.log(" ===== ini di addd",res.data)
                dispatch({
                    type : "AddContent",
                    payload : res.data
                })
                props.setController("res")
            })
            .catch((err)=>{
                props.setHandleResponse({
                    status : err.response.status,
                    message : "Faild"
                })
                props.setController("res")
            })
        }
    }
  return (
    <div className='w-11/12 m-auto'>
        {newItem.map((data,index)=>(
            <DynamicForm
                key={index}
                data={data}
                index={index}
                newItem={newItem}
                setNewItem={setNewItem}
            />
        ))}
        <div
        className='w-12/12 m-auto flex gap-5 justify-end mt-5'
        >
            <button
            className='w-44 h-10 font-3xl bg-green-500 rounded'
            onClick={()=>{
                OnSubmit()
            }}
            >Submit</button>
        </div>
    </div>
  )
}

export default HandleAdd