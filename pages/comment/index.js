import React, { Fragment, useState } from 'react';

export default function Index() {
    const [commentData, setCommentData]=useState([])

const  fectCommentData  = async ()=>{
        const data = await fetch("api/comments").then((comment)=>comment.json());
        setCommentData(data)
}

  return (
    <div>
        <button onClick={fectCommentData}>Load data</button>
      {commentData.map((data)=>{
        return(
            <Fragment key={data.id}><p>{data.id}  {data.text}</p> <hr/></Fragment>
            
        )
      })}
    </div>
  )
}
