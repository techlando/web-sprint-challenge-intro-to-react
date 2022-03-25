// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.article`

display: flex;
justify-content: space-between;
align-items: center;
align-conent: center;
border: 2px  solid #a4c090;
margin-top: 3%;
margin-right: 23%;
margin-left: 23%;
color: white;
-webkit-text-stroke: 1px black;
background-color: rgb(0,0,0, .3);

h2{
    text-shadow: 2px 2px black;
}


p {
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    font-size: 1.5rem;
    border-radius: 10px;
    background-color: #808080;
    
}


`

const Character = (props) => {
    const {characterObj} = props
    
    return(
        
         <StyledCharacter>
            <h2>{characterObj.name}</h2>
            <p>{characterObj.birth_year}</p>
          </StyledCharacter>
        

    )
}

export default Character