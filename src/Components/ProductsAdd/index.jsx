import React from 'react'
import { Container, BigContainer, Main } from './style'
import downl from '../../Assets/img/icon/downl.svg'
import info from '../../Assets/img/icon/info.svg'
import money from '../../Assets/img/icon/money.svg'
import note from '../../Assets/img/icon/note.svg'
import btn from '../../Assets/img/icon/btm-btn.svg'

export const ProductsAdd = ({ setAdd, add }) => {
  return (
    <>
      <Main onClick={() => setAdd(!add)} ></Main>
      <BigContainer>
        <Container>
          <Container.title>
            Mahsulot qo'shish
          </Container.title>
          <Container.body>
            <div className="input-con">
              <p className="input-tit">
                Mahsulot suratlari
              </p>
              <div className="input">
                <img className='icon' src={downl} alt="" />
                <input type="text" className='inp' />
              </div>
            </div>
            <div className="input-con">
              <p className="input-tit">
                Mahsulot nomi
              </p>
              <div className="input">
                <img className='icon' src={note} alt="" />
                <input type="text" className='inp' />
                <div className="btnwrap">
                  <img className='btn' src={btn} alt="" />
                </div>
              </div>
              <div className="products">
                <button className="pr">Sovgalar</button>
                <button className="pr">smart watch</button>
                <button className="pr">avtomabilalr</button>
                <button className="pr">foydali maxsulot</button>
                <button className="pr">telefonlar</button>
              </div>
            </div>
            <div className="input-con">
              <p className="input-tit">
                Ma'lumot
              </p>
              <div className="input">
                <img className='icon' src={info} alt="" />
                <textarea type="text" className='inp' />
              </div>
            </div>
            <div className="input-con">
              <p className="input-tit">
                narxi
              </p>
              <div className="input">
                <img className='icon' src={money} alt="" />
                <input type="number" className='inp' />
              </div>
            </div>
          </Container.body>
          <Container.btns>

          </Container.btns>
        </Container>
      </BigContainer>
    </>
  )
}

export default ProductsAdd