import React from 'react'
import { Paging } from './Paging'
import 'reactjs-popup/dist/index.css';
import { useDispatch } from 'react-redux';
import CrudWrapper from '../CrudWrapper/CrudWrapper';
import { header3 } from '../CrudWrapper/dataCrud';

const ZilogTable = (props) => {

    const dispatch = useDispatch()

    const Mapper=(object,header,no)=>{
        let result = []
        header.map((data,index)=>{
            result.push(
                <td
                key={index}
                className="py-3 px-6 text-left">
                    <p>{object[data.data]}</p>
                </td>
            )
        })
        
        return result
    }

  return (
    <div>
        <div className='mt-10 h-full overflow-y-scroll' style={{ scrollbarWidth: "none",height: "80.33vh"}}>
            <div className='w-10/12 m-auto table-auto overflow-x-auto'>
                <table className="border-collapse border border-gray-900">
                    <thead>
                        <tr className="bg-gray-900">
                            {props.data.header.map((header,index)=>(
                                <th className="py-3 px-6 text-left text-gray-300"
                                key={index}
                                >{header.name}</th>
                        ))}
                        </tr>
                    </thead>
                    <tbody className="text-sm font-light">
                            {props.data.body.map((x,index)=>(
                                <tr key={index}
                                className="border-b border-gray-200 font-bold hover:bg-gray-100 hover:text-gray-700"
                                onClick={()=>{
                                    dispatch({
                                        type: "OnShow",
                                        payload : {
                                            show:true,
                                            htmlState:<CrudWrapper data={x} header3={header3} controller={"show"}/>
                                        }
                                    })
                                }}
                                >
                                    {Mapper(x,props.data.header,index)}
                                </tr> 
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
        <Paging/>
    </div>
    
  )
}

export default ZilogTable