import React, { useEffect, useState } from 'react'
import { dataSidebar } from './DataSideBar';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
export const SideBar = () => {
    const main = useSelector((state) => state.main);
    const [activeMenu,setActiveMenu] = useState({})
    const [open, setOpen] = useState(true);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch({
        type :"path",
        payload : "/dashboard"
      })
      navigate("/dashboard")
    },[])
  return (
    // <div>Hello world</div>
    <div>
        <div
      className={` ${
        open ? "w-72" : "w-20 "
      } bg-gray-900 h-screen p-5  pt-8 relative duration-300`}
    >
        <img
          src={`${main.ImgUrl}${main.path}.png`} 
          className={`absolute cursor-pointer -right-3 bg-gray-900 top-9 w-7 border-dark-purple
          border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="https://blogger.zilog.online/static/media/logo.436f1557.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
            onClick={()=>{
              navigate("/dashboard")
            }}
          />
        </div>
        <ul className="pt-6 no-scrollbar mt-10">
          {dataSidebar.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-gray-800 text-sm h-14 items-center gap-x-4 shadow-lg
              ${
                Menu.path === main.path && "bg-gray-500"
              }`}
              onClick={()=>{
                dispatch({
                  type :"path",
                  payload : Menu.path
                })
                navigate(Menu.path)
              }}
            >
              <img src={`${main.ImgUrl}/${Menu.src}`} 
              className='w-10'
              />
              <span className={`${!open && "hidden"} origin-left duration-200 text-gray-400`}
              >
                <strong>{Menu.title}</strong>
              </span>
            </li>
          ))}
        </ul>
    </div>
    </div>
  )
}