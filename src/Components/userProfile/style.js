import styled from "styled-components";
import {Link} from 'react-router-dom'

const Main = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.653);
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
`

const Container = styled.div`
    position: absolute;
    right: 40px;
    top: 20px;
    width: 400px;
    height: 550px;
    background: #FFFFFF;
    border-radius: 16px;
    padding: 32px;
    z-index:999;
`
Container.Nav = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    img{
        cursor: pointer;
    }
    .title{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 17px;
        line-height: 36px;
        color: #001869;
        text-transform: capitalize;
    }
`

Container.ProfilePage = styled.div`
    margin: 5px 0;
    min-width: 140px;
    min-height: 140px;
    display: flex;
    gap: 15px;
`

Container.ProfilePage.ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    .name{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        color: #001869;
    }
    .job-email{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #000000;
    }
`
Container.ProfileOptions = styled(Link)`
    display:flex;
    flex-direction: column;
    padding: 17px 20px;
    text-decoration: none;
    .option{
        display:flex;
        gap: 10px;
        padding: 5px 0;
        box-shadow:
            rgba(27, 31, 35, 0.04) 0px 1px 0px,
            rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
        cursor: pointer;
        ;
        .option-photo{
            width: 56px;
            height: 56px;
            background: #E5FAFB;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            img{
                width: 20px;
            }
        }
        .more{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .opt-title{
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 30px;
                color: #000000;
            }
            .opt-info{
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 24px;
                color: #000000;
            }
        }
    }
    .log-out{
        margin-top: 25px;

        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        color: #FFFFFF;

        display:flex;
        text-align: center;
        justify-content: center;
        align-items: center;

        height: 60px;
        background: #001869;
        border-radius: 8px;
    }
`

export { Container, Main }