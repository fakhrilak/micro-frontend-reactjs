import React,{useState,useEffect} from 'react'

const DynamicForm = (props) => {
    const [item,setItem] = useState(props.data.value)
    useEffect(()=>{
        let datas = [...props.newItem]
        datas[props.index] = {
            name : props.newItem[props.index].name,
            value : item
        }
        props.setNewItem(datas)
        // return(()=>{
        //     props.setTriger(true)
        // })
    },[item])

  return (
    <div>
        <p className='text-gray-300'>{props.data.place_holder}</p>
        <input
            className='rounded text-center w-full h-8'
            type={props.data.type}
            value={item}
            placeholder={props.data.name}
            onChange={(e)=>setItem(e.target.value)}
        />
    </div>
  )
}

export default DynamicForm