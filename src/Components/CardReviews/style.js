import styled from "styled-components";

export const Section = styled.section`
display: flex;
flex-direction: column;
width: 100vw;
height: 80vh;

p{
    width: 40vw;
    margin: 75px 0 0 150px;
}

h2{
    font-size: 80px;
    margin: -20px 0 0 150px;
}
`

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 100px;
margin-top: 50px;
`

export const Cards = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 20vw;
gap: 20px;
padding: 50px;
position: relative;

h3{
    color: #000;
}

p{
    color: #000;
    width: 100%;
    text-align: center;
    margin: 0;
}
`

export const Perfil = styled.img`
width: 100px;
`

export const BgCard = styled.img`
position: absolute;
z-index: -1;
width: 100%;
height: 100%;
`