import React from 'react'
import { SideBar } from 'left_sidebar/SidebarComponent';
import {Header} from 'header/Header'
export const MyWrapper = (props) => {
  return (
    <div className="w-full">
      <div className="flex">
        <SideBar/>
        <div className="flex-1 p-7 bg-white">
            <Header/>
            {props.children}
        </div>
      </div>
    </div>
  )
}

// export default MyWrapper