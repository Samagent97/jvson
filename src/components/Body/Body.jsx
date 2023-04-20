import React from 'react';
import styled from 'styled-components';
import './Body.css';
const Bdy = styled.div`
background-color:#101010,
width:100%,
height:50vh,


`;
const Tarea = styled.div`



`;

function Body() {
    return (
        <Bdy>
          <Tarea className='tim'>
<h1 className='t1'>Askam.ai</h1>
<h3 className='t2'>Your new bestie <br /> Just ask am </h3>
<button className='b1'>Try it</button>
          </Tarea>  
        </Bdy>
    );
}

export default Body;