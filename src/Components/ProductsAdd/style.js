import styled from "styled-components";

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
    padding: 32px;
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
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 10px;
    height: 83%;
    border: 1px solid red;
    padding: 5px;
    align-items: center;
    width: 100%;
    .input-con{
        height: 15%;
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
                font-size: 22px;
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
        }
        .products{
            z-index: 20;
            background: #FBFBFB;
            height: 150px;
            overflow: auto;
            border: 0.5px solid #E1E1E1;
            position: sticky;
            display: flex;
            border-radius: 5px;

            gap: 1px;
            flex-direction: column;
            position: absolute;
            min-width: 50%;
            max-width: 100%;
            right: 0;
            .pr{
                padding: 5px;
                background-color: #FBFBFB;
                border: 1px solid #E1E1E1;
                border-radius: 2px;
                outline:none;
                font-size: 20px;
                text-transform: capitalize;
                :active{
                    opacity: .8;
                }
            }
        }
    }
`

Container.btns = styled.div``

export { Main, Container, BigContainer }