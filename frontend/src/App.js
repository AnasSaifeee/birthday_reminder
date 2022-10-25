
import React, { useEffect, useState } from 'react'
import data from './data'
import List from './List'



function App() {
  const [people, setPeople] = useState(null)
  const fetchdata=async()=>{
    const response=await fetch("http://localhost:8080/api/read/birthday", {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			}})
    const json = await response.json()
    let todayMonth = new Date().getMonth() + 1;
		let todayDate = new Date().getDate();
    let data1=json.data.filter((data)=>new Date(data.dob).getMonth()+1===todayMonth && new Date(data.dob).getDate()===todayDate)
    setPeople(data1)
    console.log(data1);
    console.log(todayMonth,todayDate);
    console.log(json);
    

  }
  
  useEffect(()=>{
    console.log(people)
  },[people])
  return (

    <main>
      <section className='container'>
      <h3>{people?.length} birthdays today</h3>
        {people && <List people={people} setpeople={setPeople} />}
        <button onClick={() => fetchdata()}>clear all</button>
      </section>
    </main>
    
  )
}


export default App
