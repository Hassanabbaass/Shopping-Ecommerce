import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import orangewhitenike from '../Assets/orangewhitenike.png'
import pinkshoes from '../Assets/pinkshoes.png'
import { mobile } from '../responsive'

const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding : "10px"})}
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props)=>props.type === "filled" && "none"};
    background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"} ;
`

const TopTexts = styled.div`
    ${mobile({display : "none"})}
`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`

const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
     ${mobile({flexDirection: "column"})}
`

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`

const Image = styled.img`
    width: 300px;
    ${mobile({width: "200px"})}
`

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`

const ProductSize = styled.span``

const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({margin: "5px 15px"})}
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({marginBottom: "20px"})}
`

const Hr = styled.hr`
    background-color: #b65fbf;
    border: none;
    height: 1px;
`

const Summary = styled.div`
    flex: 1;
    border: 1px solid #b65fbf;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`

const SummaryItem = styled.div`
    margin: 30px 20px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500" };
    font-size: ${props=>props.type === "total" && "24px"};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`




function Cart() {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR CART</Title>
            <Top>

                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Cart (2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type='filled'>CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src={orangewhitenike}/>
                            <Details>
                                <ProductName><b>Product:</b> ORANGE WHITE AIRMAX</ProductName>
                                <ProductId><b>ID:</b> 132213913832</ProductId>
                                <ProductColor color='#c7594b'/>
                                <ProductSize><b>Size:</b> 42</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetails>
                            <ProductAmountContainer>
                                <AddIcon/>
                                <ProductAmount>2</ProductAmount>
                                <RemoveIcon/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 40</ProductPrice>
                        </PriceDetails>
                    </Product>

                    <Hr/>

                    <Product>
                        <ProductDetail>
                            <Image src={pinkshoes}/>
                            <Details>
                                <ProductName><b>Product:</b> Pink New Balance</ProductName>
                                <ProductId><b>ID:</b> 231233243243</ProductId>
                                <ProductColor color='pink'/>
                                <ProductSize><b>Size:</b> 42</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetails>
                            <ProductAmountContainer>
                                <AddIcon/>
                                <ProductAmount>1</ProductAmount>
                                <RemoveIcon/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 25</ProductPrice>
                        </PriceDetails>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 105</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 25</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -20</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type='total'>
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$ 110</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryButton>CHECKOUT NOW</SummaryButton>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart