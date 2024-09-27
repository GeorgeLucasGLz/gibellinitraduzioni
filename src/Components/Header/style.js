import styled from "styled-components";

export const Header = styled.header`
display: flex;
width: 100%;
position: relative;

img{
    width: 100px;
    margin: 30px;
}

`
export const Navbar = styled.nav`
display: flex;
width: 100%;
justify-content: center;
align-items: center;

ul{
    display: flex;
    gap: 45px;
 
}

li{
    font-size: 20px;
    cursor: pointer;
}

li:hover{
    opacity: .5;
}

.contato{
    position: absolute;
    right: 100px;
    border: 1px solid #fff;
    padding: 10px 15px;
    margin-top: -10px;
    border-radius: 5px;
}
`
export const Body = styled.div`

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;


`