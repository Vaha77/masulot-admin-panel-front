import styled from "styled-components";
import { Link } from 'react-router-dom'

const media = {
    laptop: '@media (max-width: 1240px)',
    tablet: '@media (max-width: 768px)',
    mobileM: '@media (max-width: 400px)',
    mobileS: '@media (max-width: 320px)',
}

const Main = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.653);
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    transition: 0 !important;
    ${media.tablet}{
        width: 768px;
        height: 110vh;
        background-color: rgba(0, 0, 0, 0.33);
        bottom: 0;
    }
    @media (max-width: 620px) {
        height: 5000px;
    }
`

const Container = styled.div`
    position: fixed;
    right: 40px;
    top: 20px;
    width: 400px;
    height: 550px;
    background: #FFFFFF;
    border-radius: 16px;
    padding: 25px 20px;
    z-index:999;
    overflow: auto;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    ${media.tablet}{
        width: 350px;
        height: 480px;
        padding: 20px 15px;
    }
    ${media.mobileM}{
        width: 320px;
        height: 480px;
        padding: 12px 15px;
        margin: 0 auto;
        left: 7%;
    }
    ${media.mobileS}{
        width: 310px;
        left: 1.5%;
    }
`
Container.Nav = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    img{
        cursor: pointer;
    }
    ${media.mobileM}{
        img{
            width: 10%;
        }

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
    height: 140px;
    display: flex;
    gap: 5px;
    padding: 2px;
    img{
        width: 30%;
        margin-right: 5px;
    }
    ${media.tablet}{
        height: 120px;
        gap: 2px;
        img{
            width: 30%;
        }
    }
    ${ media.mobileM } {
        gap: 7px;
    }

`

Container.ProfilePage.ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    .name{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        color: #001869;
    }
    .job-email{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #000000;
    }
    ${media.tablet}{
        .name{
            font-size: 18px;
            color: #001869;
        }
        .job-email{
            font-size: 15px;
            color: #000000;
        }
    }
    ${ media.mobileM } {
        .name{
            font-size: 16px;
        }
        .job-email{
            font-size: 14px;
        }
    }

`
Container.ProfileOptions = styled(Link)`
    display:flex;
    flex-direction: column;
    padding: 17px 0px;
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
            ${media.tablet}{
                
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
        :hover{
            opacity: .8;
        }
        :active{
            opacity: 1;
        }
    }
    ${media.tablet}{
        padding: 10px 15px;
        .option{
            .option-photo{
                width: 40px;
                height: 40px;
            }
        }
        .log-out{
            margin-top: 7px;
        }
    }
`

export { Container, Main }