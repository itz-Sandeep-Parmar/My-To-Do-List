"use client"
import React, { useState } from 'react'

const App = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask,{title,desc}])
    console.log(mainTask);
    settitle("")
    setdesc("")
  }

const deleteHandler = (i) => {
let copytask = [...mainTask]
copytask.splice(i,1)
setMainTask(copytask)
}

  let renderTask = <h2>No Task Available</h2>

  if(mainTask.length>0){
renderTask = mainTask.map((t, i) => {
  
  
  return (
<li key={i} className='flex items-center justify-between'>
<div className='flex items-center justify-between mb-5 w-2/3'>
      <h5 className='text-2xl font-semibold mb-8'>{t.title}</h5>
      <h6 className='text-lg font-medium'>{t.desc}</h6>
    </div>

<button onClick={() => {
  deleteHandler(i)}}
   className='bg-red-400 text-white px-4 py-2 rounded font-bold mb-5 '>Delete</button>

</li>
  
  )
  
})
  }


  return (
    <>
    <h1 className='bg-black font-bold text-5xl text-white p-5 text-center '>Sandeep's To Do list</h1>
   
    <form onSubmit={submitHandler}>

      <input type="text" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' placeholder='Enter Title Here'
      value ={title}
      onChange={(e) => {
        settitle  (e.target.value)
      }} />
      <input type="text" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' placeholder='Enter Desciption Here'
      value = {desc}
      onChange={(e) => {
        setdesc(e.target.value)
      }} />
    <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'>Add Task</button>
    
    </form>
<hr />
    
    <div className='p-8 bg-slate-200'>
      <ul>{renderTask}</ul>
    </div>
    </> 
  )
}

export default App