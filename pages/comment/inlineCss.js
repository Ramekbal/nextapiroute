import React from 'react';
import styled from 'styled-components';

const Title= styled.h2`
font-size:300px;
color:${({theme})=>theme.color.primary};
`

export default function InlineCss() {
  return (
    <div>
      <h1 style={{color:"red"}}>Color red</h1>
      <Title>Hello world</Title>
    </div>
  )
}
