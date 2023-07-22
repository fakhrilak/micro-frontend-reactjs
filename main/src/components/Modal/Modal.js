import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Modal = () => {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  return (
    <div>
      {modal.show ? (
        <div className="fixed inset-0 z-40 flex items-center justify-center overflow-auto">
          <div
            className="fixed inset-0 opacity-60 bg-gray-900"
            onClick={() =>
              dispatch({
                type: "OnShow",
                payload: {
                  show: false,
                  htmlState: <p></p>
                }
              })
            }
          ></div>
          <div className="w-5/12 bg-gray-900 h-96 p-4 z-40 rounded ">
            {modal.htmlState}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Modal;
