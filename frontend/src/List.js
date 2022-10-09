import React, { useState } from 'react';
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
                <button className='remove' onClick={()=>handleremove(id)}  >remove</button>
            </div>
            </article>
            </>
            );
        })}
            </>
        );
        };

export default List;
