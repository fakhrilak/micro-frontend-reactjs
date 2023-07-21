import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
export const Header = () => {
    const main = useSelector((state) => state.main)
  return (
    <div className='h-10'>
         <h1 className="text-3xl font-semibold text-gray-900 ml-10 underline">{main.path}</h1>
    </div>
  )
}

// export default Header