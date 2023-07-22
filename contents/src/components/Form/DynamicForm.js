import React,{useState,useEffect} from 'react'

const DynamicForm = (props) => {
    const [item,setItem] = useState(props.data.value)
    useEffect(()=>{
        let datas = [...props.newItem]
        datas[props.index] = {
            name : props.newItem[props.index].name,
            value : item,
            place_holder : props.newItem[props.index].place_holder,
            type : props.newItem[props.index].type
        }
        props.setNewItem(datas)
        // return(()=>{
        //     props.setTriger(true)
        // })
    },[item])

  return (
    <div className='mt-5'>
        <p className='text-gray-300'>{props.data.place_holder}</p>
        {props.data.err && <p className='text-red-500'>{props.data.err}</p>}
        <input
            className={`rounded text-center w-full h-8 border-2 ${props.data.err ? 'border-red-500' : 'border-white'}`}
            type={props.data.type}
            value={item}
            placeholder={props.data.name}
            onChange={(e)=>setItem(e.target.value)}
        />
    </div>
  )
}

export default DynamicForm