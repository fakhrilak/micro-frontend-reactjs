import React from 'react'
import { SideBar } from 'left_sidebar/SidebarComponent';
import {Header} from 'header/Header'
export const MyWrapper = (props) => {
  return (
    <div className="w-12/12 h-screen">
      <div className="flex">
          <SideBar/>
        <div className="w-full bg-white h-screen">
            <Header/>
            <div className='w-12/12 m-auto h-84'>
                {props.children}
            </div>     
        </div>
      </div>
    </div>
  )
}

// export default MyWrapper