import React, { useState } from 'react'
import { Container, BigContainer, Main } from './style'
import downl from '../../Assets/img/icon/downl.svg'
import cancel from '../../Assets/img/cancel.svg'
import info from '../../Assets/img/icon/info.svg'
import money from '../../Assets/img/icon/money.svg'
import note from '../../Assets/img/icon/note.svg'
import btn from '../../Assets/img/icon/btm-btn.svg'
import categories from '../../Mock/categories'
export const ProductsAdd = ({ setAdd, add }) => {
  const [catagery, setCategary] = useState(false)
  const [catageryname, setCategaryName] = useState(categories[0].name)
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

              </div>
            </div>
            <div className="input-con">
              <p className="input-tit">
                Kategoriya
              </p>
              <div className="input">
                <img className='icon' src={note} alt="" />
                <div className="slc-cat">{catageryname}</div>
                <div className="btnwrap">
                  <img src={btn} onClick={() => setCategary(!catagery)} className='btn' alt="" />
                </div>
              </div>
              <div className="catagery">
                {categories.map((i)=>{
                  return <p className="ctg">{i.name}</p> 
                })}
              </div>
              {/* <select className='input' name="" id="">
                  <img className='icon' src={money} alt="" />
                  {categories.map((item) => {
                    return <option className='inp'>{item.name}</option>
                  })}
                </select> */}
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
