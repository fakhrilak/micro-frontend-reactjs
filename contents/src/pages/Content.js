import React,{useState,useEffect} from 'react'
import { dataForm } from './data/dataForm'
import DynamicForm from '../components/Form/DynamicForm';
import ZilogTable from '../components/Table/ZilogTable';
import { API, config } from '../config/API';

export const Content = () => {
    const [newItem, setNewItem] = useState(dataForm);
    const [data,setData] = useState([])
    useEffect(()=>{
        API.get("/posts", config)
        .then((res) => {
           setData(res.data)
        })
        .catch((error) => {
            console.error("Fetch error:", error);
        });
    },[])
  return (
    <div
    className='w-11/12 m-auto'
    >   
        {/* {dataForm.map((data, index) => (
            <div key={index} className='mt-5 w-9/12'>
              <DynamicForm
                data={data}
                index={index}
                newItem={newItem}
                setNewItem={setNewItem}
              />
            </div>
          ))} */}
          <div>
                <ZilogTable
                   data={{
                    header:[
                      {"name":"No","type":"text","data":"id"},
                      {"name" :"Title","type":"text","data":"title"},
                      {"name" :"Desc","type":"text","data":"body"},
                    ],
                    body : data
                  }}
                //   res={dataTable}
                //   page={page}
                //   setPage={setPage}
                //   per_page={per_page}
                //   setPer_page={setPer_page} 
                />
          </div>
    </div>
  )
}
