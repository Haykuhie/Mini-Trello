import React, {useState} from 'react';
import {InputBase} from '@material-ui/core'

export default function Title(){
    const [open, setOpen]= useState(false)

    return (
        <div className= 'heading'>
            {open? (
                <div className='todo active'>
                    <InputBase  autoFocus value='To Do' onBlur={()=>setOpen(!open)}/>
                </div>
               
            ) : (
                <div className='todo' onClick={()=>setOpen(!open)}
                >
                    To Do
                </div>
            )
        }
        <div className='dots'>...</div>   
    </div>
    )
}
