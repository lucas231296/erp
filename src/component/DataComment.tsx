import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const DataComment = () => {
    const [comments, setComments]=useState([])
    const [id, setId] = useState (1)

    useEffect (()=>{
        axios (`https://jsonplaceholder.typicode.com/comments/${id}`)
        .then (res=>{
            console.log(res);
            setComments (res.data)
        })
        .catch (err=>{
            console.log(err);
        })
    }, [])
  return (
    <div>
      <input type='text' value={id} onChange={e => setId (e.target.value)}/>
      <ul>{comments.map (comment =>(
        <li key={comment.id}> {comment.name}</li>
      ))}</ul>
    </div>
  )
}

export default DataComment