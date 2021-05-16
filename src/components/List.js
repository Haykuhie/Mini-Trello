import React from 'react';
import Title from './Title';
import Card from './Card';
import Input from './Input';


export default function List(){
    return (
        <div className= 'card'>
        <Title/>
        <Card/>
        <Card/>
        <Input/>
        
        </div>
    )
}