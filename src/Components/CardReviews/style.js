import styled from "styled-components";

export const Section = styled.section`
display: flex;
flex-direction: column;
width: 100%;
height: auto;

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
z-index: 1;
position: relative;
box-shadow: rgba(194, 139, 13, 0.4) 5px 5px, 
            rgba(194, 139, 13, 0.3) 10px 10px, 
            rgba(194, 139, 13, 0.2) 15px 15px, 
            rgba(194, 139, 13, 0.1) 20px 20px, 
            rgba(194, 139, 13, 0.05) 25px 25px;


h3{
    z-index: 1;
    color: #000;
}

p{
    color: #000;
    width: 100%;
    text-align: center;
    margin: 0;
    z-index: 1;
}
`

export const Perfil = styled.img`
width: 100px;
z-index: 1;
`

export const BgCard = styled.img`
position: absolute;
z-index: 0;
width: 100%;
height: 100%;
`