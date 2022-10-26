import React, { useState } from 'react';
import * as AiIcon from 'react-icons/ai'
const List = ({people,setpeople}) => {


const handleremove=(id)=>{
  const newpeople=people.filter((person)=>person.id!==id)
  setpeople(newpeople)
}

var today = new Date()
  return (    
    <>

    {people.map((person)=>{
    const {id,name,age,day,month,image}=person;
    
        return (
                <>
            <article key={id} className='person'>
            <img src={image} alt={name}/>
            <div className='item'>
                <h4>
                {name}
                <p>{age}years</p>
                </h4>
                <AiIcon.AiFillCloseCircle><button className='remove' onClick={()=>handleremove(id)}  >remove</button></AiIcon.AiFillCloseCircle>
                
            </div>
            </article>
            </>
            );
        })}
            </>
        );
        };

export default List;
