import React,{useState,useEffect} from 'react'
import HandleShow from './HandleShow'
import HandleEdit from './HandleEdit'
import HandleDelet from './HandleDelet'
import HandleResponse from './HandleResponse'
import HandleAdd from './HandleAdd'

const CrudWrapper = (props) => {
  const [controller,setController] = useState(props.controller)
  const [handleresponse,setHandleResponse] = useState()
  const [dataWrapper,setWrapper] = useState(props.header3)

  return dataWrapper ? (
    <div className='h-full'>
      <div className='w-11/12 m-auto flex gap-5 justify-end'>
        {dataWrapper.map((data, index) => (
          <div key={index} className={`w-20 text-center rounded-full h-10 ${data.color}`}>
            <button className='bg-gray-900 w-11/12 m-auto rounded h-10 flex items-center justify-center'
            onClick={()=>setController(data.type)}
            ><strong>{data.view}</strong></button>
          </div>
        ))}
      </div>
      {controller == "show"?<div className='mb-10'>
        <HandleShow data={props.data} />
      </div>:controller == "edit" ? 
        <HandleEdit data={props.data} setController={setController} setHandleResponse={setHandleResponse}/>: controller == "del" ?
        <HandleDelet data={props.data} setController={setController} setHandleResponse={setHandleResponse}/>: controller == "add" ?
        <HandleAdd setController={setController} setHandleResponse={setHandleResponse}/>: controller == "res" ?
        <HandleResponse response={handleresponse}/> : null
        }
    </div>
  ):null
}

export default CrudWrapper