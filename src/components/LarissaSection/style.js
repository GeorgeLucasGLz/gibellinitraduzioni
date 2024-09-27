import styled from "styled-components";

export const Section = styled.section`
display: flex;
width: 100vw;
height: 100vh;
`

export const Image = styled.img`
width: 50vw;
`

export const ContainerText = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 50vw;
`

export const Infos = styled.div`
display: flex;
flex-direction: column;
width: 40vw;

h2{
    font-size: 80px;
    margin-top: 20px;
}

h3{
    margin-top: -70px;
}
p{
    width: 30vw;
}
`