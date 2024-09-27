import styled from "styled-components";

export const Section = styled.section`
display: flex;
width: 100%;
height: auto;
background-image: linear-gradient(to right bottom, rgba(0, 74, 255, 0.5), rgba(0, 67, 196, 0.5), rgba(0, 53, 134, 0.5), rgba(0, 36, 73, 0.5), rgba(15, 16, 18, 0.5));
box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
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