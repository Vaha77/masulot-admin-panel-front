import styled from "styled-components";

const Main = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.653);
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
`

const BigContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    position: absolute;
    top: 30px;
    width: 500px;
    height: 550px;
    background: #FFFFFF;
    border-radius: 16px;
    padding: 32px;
    z-index:999;
    margin: auto auto;
`

Container.title = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: #001869;
    text-align: center;
`

Container.body = styled.div`
        
`
Container.btns = styled.div``

export { Main, Container, BigContainer }