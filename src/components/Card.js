import React,{useState} from 'react'
import store from '../utils/store'

export default function Card() {

    const addCard= (title)=> console.log(title)
    
    return (
        <div value={{addCard}}>
           
        <div className='listItem'>Item</div>
             
        </div>
    )
}
