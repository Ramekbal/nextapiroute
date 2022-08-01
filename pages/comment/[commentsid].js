import React from 'react'
import { comment } from '../../data/comments'

export default function CommentDetails({findElement}) {
  return (
    <div>
      <h1>{findElement.text}</h1>
      <button className='btn btn-primary'>ClickMe</button>
    </div>
  )
}

export async function getStaticPaths(context){

    return {
        paths:[
           { params:{commentsid:"1"}},
           { params:{commentsid:"2"}},
            {params:{commentsid:"3"}}
        ],
        fallback:false
    }
}

export async function getStaticProps(context){
    const {params} = context;
    const {commentsid} = params;
    const findElement= comment.find((commentss)=>commentss.id==commentsid);

    return {
        props:{
            findElement:findElement
        }
    }

}

