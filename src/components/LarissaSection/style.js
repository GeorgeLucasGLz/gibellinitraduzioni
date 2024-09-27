import styled from "styled-components";

export const Section = styled.section`
display: flex;
width: 100vw;
height: 80vh;
`

export const Image = styled.img`
width: 40vw;
`

export const ContainerText = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 60vw;
`

export const Infos = styled.div`
display: flex;
flex-direction: column;
width: 40vw;

h2{
    font-size: 80px;
    margin-top: 20px;
}

p{
    width: 40vw;
}
`