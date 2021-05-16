import React, {useState} from 'react'
import InputCard from './InputCard';
import { Collapse } from '@material-ui/core';

export default function Input() {
    const [open, setOpen]= useState(false)
    return (
 
        <div >

            <Collapse in = {open}>
                  <InputCard setOpen ={setOpen}/>
            </Collapse>
           <Collapse in = {!open}>
                  <div className='todo input' onClick={()=>setOpen(!open)}>+ Add another card</div>
           </Collapse>
           
             
        </div>
    )
}
