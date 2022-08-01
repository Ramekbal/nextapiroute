import React, { Fragment, useState } from 'react';

export default function Index() {
    const [commentData, setCommentData]=useState([])
    const [comment, setComment]=useState('')

const  fectCommentData  = async ()=>{
        const data = await fetch("api/comments").then((comment)=>comment.json());
        setCommentData(data)
}
const sendData = async() =>{
    const response = await fetch("api/comments", {
      method:"POST",
      body:JSON.stringify(comment),
      headers:{
        'Content-Type':"Application/json",
      }
    })
    const data = response.json();
    console.log(data);
}
const deleteHandler = async (id)=>{
  const data= await fetch(`api/comments/${id}`,{
    method:"DELETE"
  })  
  console.log("===", data)
  // const parseJson = await data.json();
  // console.log("parse", parseJson);
  fectCommentData();
}

  return (
    <div>
        <input type="text" value={comment} onChange={(e)=>setComment(e.target.value)}/>
        {comment}<br/>
        <button onClick={sendData}>Submit data</button><br/>
        <button onClick={fectCommentData}>Load data</button>
      {commentData.map((data)=>{
        return(
            <Fragment key={data.id}><p>{data.id}  {data.text}</p> <button onClick={()=>deleteHandler(data.id)}>Delete</button><hr/></Fragment>
            
        )
      })}
    </div>
  )
}
