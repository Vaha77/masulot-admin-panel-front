import styled from "styled-components";

const Container = styled.div`
    position: sticky;
    display:${({ hidden }) => (hidden ? 'flex' : 'none')};
    flex-direction: column;
    width:350px;
    background-color: white;
    padding: 30px 30px;
    min-height: 100vh;
    top: 0;
    left: 0;
`
Container.Title = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    opacity: 0.5;
    margin: 20px 0 10px 0 ;
`
Container.Links = styled.div`
    display:flex;
    flex-direction: column;
    .link{
        display:flex;
        align-items:center;
        text-decoration:none;
        height: 40px;
        padding: 12px 10px;
        transition: .3s;
        img{
            width:15px;
        }
        .title{
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            color: '#001869';
            line-height: 24px;
            margin-left:10px;
        }
    :hover{
        background-color: #001869 !important;
        .title{
            color:white;
        }
    }
    border-radius: 4px;
    }
`
export {Container}
