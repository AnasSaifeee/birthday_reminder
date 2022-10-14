
import React, { useState } from 'react'
import data from './data'
import List from './List'



function App() {
  var today= new Date()
  const [people, setPeople] = useState(null)
     fetchdata()
  const fetchdata=async()=>{
    const response=await fetch("http://localhost:4000/api/birthdayreminder/")
    const json = await response.json()
    
    if(response.ok)
    {
         setPeople(json)
    }

  }
  
  console.log(people)
  return (

    <main>
      <section className='container'>
      <h3>{people.length} birthdays today</h3>
        <List people={people} setpeople={setPeople} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
    
  )
}


export default App
