import React, { useState } from 'react'
import data from './data'
import List from './List'



function App() {
  var today= new Date()
  const [people, setPeople] = useState(data.filter((data)=>data.day==today.getDate()&&data.month==today.getMonth()))
 
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
