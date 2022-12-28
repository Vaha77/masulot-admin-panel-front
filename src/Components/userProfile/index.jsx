import React from 'react'
import { Container, Main } from './style'
import cancel from '../../Assets/img/cancel.svg'
import profile from '../../Assets/img/profile.svg'
// import person from '../../Assets/img/person.svg'
import { options as opts } from './option-data.js'
import { Link } from 'react-router-dom'

export const UserProfile = ({ setHidden, hidden }) => {
    return (
        <>
            <Main onClick={() => setHidden(!hidden)}>

            </Main>
            <Container>
                <Container.Nav>
                    <p className='title'>User profile</p>
                    <img onClick={() => setHidden(!hidden)} src={cancel} alt="" />
                </Container.Nav>
                <Container.ProfilePage>
                    <img src={profile} alt="" />
                    <Container.ProfilePage.ProfileInfo>
                        <p className="name">Musa Designer</p>
                        <p className="job-email">Graphic & Ux/Ui Designer</p>
                        <p className="job-email">Musa Designer</p>
                    </Container.ProfilePage.ProfileInfo>
                </Container.ProfilePage>
                <Container.ProfileOptions>
                    {
                        opts.map(({ id, icon, title, desc, path }) => {
                            return <Link to={path} style={{ textDecoration: 'none' }} key={id} className="option">
                                <div className="option-photo">
                                    <img src={icon} alt="" />
                                </div>
                                <div className="more">
                                    <p className="opt-title">{title}</p>
                                    <p className="opt-info">{desc}</p>
                                </div>
                            </Link>
                        })
                    }
                    <div className="log-out">
                        Chiqish
                    </div>
                </Container.ProfileOptions>
            </Container>
        </>

    )
}


export default UserProfile