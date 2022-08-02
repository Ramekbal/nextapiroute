import React from 'react';
import Image from 'next/image';
import pet2 from './../public/images/pet2.jpg'

export default function Pet() {
    console.log(pet2)
  return (
    <div>
      <h1>This is pet page</h1>
      <Image alt="img" src={pet2} placeholder="blur" width="200" height="200"></Image>
      {
        ["pet1", "pet2", "pet3"].map((pet)=>{
            return(
                <Image alt="img" blurDataURL={`/./../public/images/${pet}.jpg`} src={`/./../public/images/${pet}.jpg`} width="200" height="200"></Image>
            )
        })
      }
     
    </div>
  )
}
