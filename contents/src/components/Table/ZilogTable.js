import React from 'react'

const ZilogTable = (props) => {
    const Mapper=(object,header,no)=>{
        let result = []
        header.map((data,index)=>{
            result.push(
                <td class="py-3 px-6 text-left whitespace-nowrap">
                    <p>{object[data.data]}</p>
                </td>
            )
        })
        
        return result
    }
  return (
    <div className='mt-10'>
        <div className='w-10/12 m-auto table-auto'>
            <table className="min-w-max w-11/12 m-auto table-auto rounded">
                <thead>
                    <tr className="bg-gray-800 text-yellow-300 uppercase  text-sm leading-normal">
                        {props.data.header.map((header,index)=>(
                            <th class="py-3 px-6 text-left"
                            key={index}
                            >{header.name}</th>
                    ))}
                    </tr>
                </thead>
                <tbody class="text-sm font-light">
                        {props.data.body.map((x,index)=>(
                            <tr key={index}
                            class="border-b border-gray-200 font-bold hover:bg-gray-100 hover:text-gray-700"
                            >
                                {Mapper(x,props.data.header,index)}
                            </tr> 
                        ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ZilogTable