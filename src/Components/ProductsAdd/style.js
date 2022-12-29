import styled from "styled-components";

const media = {
    laptop: '@media (max-width: 1240px)',
    tablet: '@media (max-width: 768px)',
    mobileL: '@media (max-width: 510px)',
    mobileM: '@media (max-width: 360px)',
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
    z-index:999;
    margin: auto auto;
    padding: 15px 32px;
    ${media.mobileL}{
        width: 350px;
        height: 500px;
    }
    ${media.mobileM}{
        width: 300px;
        height: 500px;
    }
    /* ${media.mobileL}{
        width: 400px;
        height: 500px;
    } */
`

Container.title = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: #001869;
    text-align: center;
`

Container.body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 10px;
    height: 83%;
    /* padding: 5px; */
    align-items: center;
    width: 100%;
    .input-con{
        height: 10%;
        position: relative;
        width: 95%;
        .input-tit{
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #000000;
            opacity: 0.8;
        }
        .cursorp{
            cursor: pointer;
        }
        .input{
            position: relative;
            height: 100%;
            background: #FBFBFB;
            border: 0.5px solid #E1E1E1;
            border-radius: 8px;
            display: flex;
            align-items: center;
            .icon{
                position: absolute;
                width: 15px;
                height: 20px;
                left: 20px;
            }
            .inp{
                height: 100%;
                width: 100%;
                background-color: transparent;
                font-size: 20px;
                padding: 5px;
                padding-left: 50px;
                border: none;
                outline: none;
                background: #FBFBFB;
                border: 0.5px solid #E1E1E1;
            }
            .btnwrap{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50px;
                .btn{
                    width: 20px;
                    padding: 5px;
                }
            }
            .slc-cat{
                width: 90%;
                max-width: 100%;
                font-size: 16px;
                padding: 5px;
                padding-left: 50px;
                text-transform: capitalize;
                -webkit-touch-callout: none; // iOS Safari
                -webkit-user-select: none; // Safari
                -khtml-user-select: none; // Konqueror HTML
                -moz-user-select: none; // Old versions of Firefox
                -ms-user-select: none; // Internet Explorer/Edge
                user-select: none; 
            }
        }
        .catagery{
            width: 415px;
            max-height: 150px;
            height: 150px;
            overflow: auto;
            z-index: 999;
            background-color: white;
            border-radius: 2px;
            position: sticky;
            border: 0.5px solid #E1E1E1;
            border-radius: 5px;

            -webkit-touch-callout: none; // iOS Safari
            -webkit-user-select: none; // Safari
            -khtml-user-select: none; // Konqueror HTML
            -moz-user-select: none; // Old versions of Firefox
            -ms-user-select: none; // Internet Explorer/Edge
            user-select: none;
            .ctg{
                display: flex;
                align-items: center;
                height: 25%;
                font-size: 16px;
                padding: 2px;
                padding-left: 15px;
                font-weight: 400;
                text-transform: capitalize;
                cursor: pointer;
                span{
                    padding-left: 20px;
                }
                :hover{
                    background-color: #E1E1E1;
                }
            }
        }
    }
`

Container.btns = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    margin-top: 10px;
    height: 7%;
    padding: 5px;
    .btn{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 130%;
        gap: 8px;
        border-radius: 8px;
    }
`

const Btns = styled.p`
    cursor: pointer;
    background: #FFFFFF;
    border: 0.8px solid ${({ color }) => color ? color : 'black'};
    color: ${({ color }) => color ? color : 'black'};
    :hover{
        background-color: ${({ color }) => color ? color : ''};
        color: white;
    }

`

export { Main, Container, BigContainer, Btns }