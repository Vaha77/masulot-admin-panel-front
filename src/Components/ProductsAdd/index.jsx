/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { Container, BigContainer, Main } from './style'

export const ProductsAdd = ({ setAdd, add }) => {
  return (
    <>
    <Main onClick={() => setAdd(!add)} ></Main>
    <BigContainer>
        <Container>
            <Container.title>
                      Mahsulot xaqida
            </Container.title>
            <Container.body>
                
            </Container.body>
        </Container>
    </BigContainer>
    </>
  )
}

export default ProductsAdd