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
  const [catageryname, setCategaryName] = useState('no selected')
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
                Mahsulot nomi:  {catageryname}
              </p>
              <div className="input">
                <img className='icon' src={note} alt="" />
                <input type="text" className='inp' />
                <div className="btnwrap">
                  {
                    catagery ?
                    <img style={{width:'30px'}} src={cancel} onClick={() => setCategary(!catagery)} className='btn' alt="" />
                    :
                    <img src={btn} onClick={() => setCategary(!catagery)} className='btn' alt="" />
                  }
                </div>
              </div>
              {catagery ? <div className="products">
                {categories.map((i)=>{
                  return <button onClick={()=>setCategaryName(i.name)} className="pr">{i.name}</button>
                })}
              </div> :
              ''}
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