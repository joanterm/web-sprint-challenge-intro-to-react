// Write your Character component here
import React from 'react';
import styled from "styled-components"

const Character = (props) => {
//STYLING BEGINS
    const CharacterWrapper = styled.div `
        border: 3px solid black;
        width: 80%;
        max-width: 1400px;
        margin: 1em auto;
        background-color: #e7c496;
        opacity: 0.7;
        border-radius: 10px;
    `
    const CharacterWrapperText = styled.h1 `
        ${props => (props.type === "character" ? `font-size: 1rem` : null)}
        ${props => (props.type === "character-name" ? `color: #064273` : null)}
    `
//STYLING ENDS

    return ( 
        <CharacterWrapper>
            <CharacterWrapperText type="character">CHARACTER</CharacterWrapperText>
            <CharacterWrapperText type="character-name">{props.name}</CharacterWrapperText>
        </CharacterWrapper>
     );
}
 
export default Character;