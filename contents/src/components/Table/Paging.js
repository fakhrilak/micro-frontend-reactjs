import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import CrudWrapper from '../CrudWrapper/CrudWrapper';
import { Singgleheader } from '../CrudWrapper/dataCrud';
import { FcNext,FcPrevious, FcAddDatabase} from "react-icons/fc";
export const Paging = () => {
    const contents = useSelector((state) => state.contents);
    const dispatch = useDispatch()
  return (
    <div className='w-full grid grid-cols-2 text-center mt-2'>
        <div/>
        <div className='w-10/12 grid grid-cols-4 gap-5'>
            <button
                className='bg-gray-900 text-gray-300 rounded h-10 flex items-center justify-center'
                onClick={() => {
                    if (contents.activePage > 1) {
                    dispatch({
                        type: "PrevPage",
                        payload: parseInt(contents.activePage) - 1,
                    });
                    }
                }}
                >
                <FcPrevious size={30} />
            </button>
            <input
            placeholder='Page'
            value={contents.activePage}
            className='text-center'
            onChange={(e)=>{
                dispatch({
                    type : "SetPage",
                    payload : e.target.value
                })
            }}
            />
            <button
             className='bg-gray-900 text-gray-300 rounded h-10 flex items-center justify-center'
            onClick={()=>{
                dispatch({
                    type : "NextPage",
                    payload : parseInt(contents.activePage) +1
                })
            }}
            >
                <FcNext size={30}/>
            </button>
            <button
           className='bg-gray-900 text-gray-300 rounded h-10 flex items-center justify-center'
            onClick={()=>dispatch({
                type: "OnShow",
                payload : {
                    show:true,
                    htmlState:<CrudWrapper header3={Singgleheader} controller={"add"}/>
                }
                                            
            })}
            >
                <FcAddDatabase size={30}/>
            </button>
        </div>
    </div>
  )
}
