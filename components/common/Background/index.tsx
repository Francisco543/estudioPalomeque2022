import React from 'react'
import styled from '@emotion/styled'

const StyledVideo = styled.video`
    position: fixed;
    z-index: -1; 
    
    @media (min-aspect-ratio:16/9){
        width: 100%;
        height: auto;
    }
    @media (max-aspect-ratio:16/9){
        width: auto;
        height: 100%;
    }
`;

const VideoDiv = styled.div`
    position: fixed;
    z-index: -1; 
    
    @media (min-aspect-ratio:16/9){
        width: 100%;
        height: auto;
    }
    @media (max-aspect-ratio:16/9){
        width: auto;
        height: 100%;
    }

`;

const Background = () => {
    return (   
        <VideoDiv>    
        <StyledVideo autoPlay  muted >
            <source src='/videos/fondo.mp4' type="video/mp4"/>
        </StyledVideo>  
        </VideoDiv>         
     );         
}
 
export default Background;