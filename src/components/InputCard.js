import React,{useState} from 'react'
import {InputBase} from '@material-ui/core'

export default function InputCard({setOpen}) {
const[cardTitle, setCardTitle]=useState('')

    const handleOnChange=(e)=>{
        setCardTitle(e.target.value)
    }

   
   
    
    return (
        <div>
            <div className='white'>
            <InputBase
            onChange={handleOnChange}
             multiline 
             onBlur={()=>setOpen(false)}
             fullWidth 
             placeholder ='Enter a title for this card...'
             value = {cardTitle}
             />
            </div>
            <div>
                <button className='green' onClick={()=>setOpen(false)} >Add Card</button>
                <button onClick={()=>setOpen(false)}>X</button>   
            </div>
        </div>
    )
}
