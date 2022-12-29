/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react'
import { Container, BigContainer, Btns } from './style'
import downl from '../../Assets/img/icon/downl.svg'
import info from '../../Assets/img/icon/info.svg'
import money from '../../Assets/img/icon/money.svg'
import note from '../../Assets/img/icon/note.svg'
import btn from '../../Assets/img/icon/btm-btn.svg'
import categories from '../../Mock/categories'
import watch from "../../Assets/img/watch.png";
import { Carddata } from '../../Mock/products'
export const ProductsAdd = ({ setAdd, add }) => {
  const [catagery, setCategary] = useState(false)
  const [newProduct, setNewProduct] = useState({})
  const [catageryname, setCategaryName] = useState(categories[0].name)
  const slcClose = (slc) => {
    setCategaryName(slc.name)
    setCategary(!catagery)
  }
  const addProduct = () => {
    newProduct.type = catageryname 
    if (newProduct.title){
      Carddata.push(newProduct)
      console.log(Carddata);
      setAdd(false)
    }
  }
  return (
    <>
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
                <input onChange={() => setNewProduct({ ...newProduct, img: watch  })} type="text" className='inp' />
              </div>
            </div>
            <div className="input-con">
              <p className="input-tit">
                Mahsulot nomi
              </p>
              <div className="input">
                <img className='icon' src={note} alt="" />
                <input onChange={(e) => setNewProduct({ ...newProduct, title:e.target.value  })} type="text" className='inp' />

              </div>
            </div>
            <div className="input-con">
              <p className="input-tit">
                Kategoriya
              </p>
              <div className="input cursorp" onClick={() => setCategary(!catagery)}>
                <img className='icon' src={note} alt="" />
                <div className="slc-cat">{catageryname}</div>
                <div className="btnwrap">
                  <img src={btn} className='btn' alt="" />
                </div>
              </div>
              {
                catagery ?
                  <div className="catagery">
                    {categories.map((i) => {
                      return <p onClick={() => slcClose(i)} className="ctg">
                        {i.icon}
                        <span>{i.name}</span>
                      </p>
                    })}
                  </div>
                  :
                  ''
              }
            </div>
            <div className="input-con">
              <p className="input-tit">
                Ma'lumot
              </p>
              <div className="input">
                <img className='icon' src={info} alt="" />
                <textarea onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} type="text" className='inp' />
              </div>
            </div>
            <div className="input-con">
              <p className="input-tit">
                narxi
              </p>
              <div className="input">
                <img className='icon' src={money} alt="" />
                <input onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} type="number" className='inp' />
              </div>
            </div>

          </Container.body>
          <Container.btns>
            <Btns onClick={() => setAdd(!add)} color={'#DF2626'} className="btn">Cancel </Btns>
            <Btns onClick={() => addProduct()}  color={'#001869'} className="btn">Yes</Btns>
          </Container.btns>
        </Container>
      </BigContainer>
    </>
  )
}
export default ProductsAdd