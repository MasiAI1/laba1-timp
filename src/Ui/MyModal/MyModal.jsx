import React, { Children } from 'react'
import cl from './MyModal.module.css'

function MyModal({visible,setVisible,children}) {
    const disp=[cl.myModal];
    if(visible){
        disp.push(cl.active);
    }
  return (
    <div className={disp.join(" ")} onClick={()=>setVisible(false)}>
            <div className={cl.myModalContent} onClick={(e)=>e.stopPropagation()}>
                {children}

            </div>
    </div>
  )
}

export default MyModal