
import React, { useState } from 'react'
import data from './data'
import List from './List'



function App() {
  var today= new Date()
  
  const fetchdata=async()=>{
    const user=await fetch("http://localhost:4000/api/birthdayreminder/",{
      method:"GET",
      headers:{
        Accept:"application/json",
        "Content-Type" :"application/json"
      }
    }).then((res)=>
     { return res.json()}
    ).then((res)=>
    { return res})
    return user
  }
  const [people, setPeople] = useState(fetchdata())
  console.log(people)
  return (
    <h1>hey there</h1>
    // <main>
    //   <section className='container'>
    //   <h3>{people.length} birthdays today</h3>
    //     <List people={people} setpeople={setPeople} />
    //     <button onClick={() => setPeople([])}>clear all</button>
    //   </section>
    // </main>
    
  )
}


export default App
