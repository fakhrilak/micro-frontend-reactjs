import React from 'react'
import { SideBar } from 'left_sidebar/SidebarComponent';
import {Header} from 'header/Header'
export const MyWrapper = (props) => {
  return (
    <div className="w-full h-scree">
      <div className="flex">
          <SideBar/>
        <div className="flex-1 p-7 bg-white h-screen">
            <Header/>
            <div className='h-2/12 w-12/12 m-auto overflow-scroll'>
                {props.children}
            </div>     
        </div>
      </div>
    </div>
  )
}

// export default MyWrapper