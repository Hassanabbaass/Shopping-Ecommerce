import React from 'react'
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

import brownshoes from '../Assets/brownshoes.png'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { mobile } from '../responsive';


const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({padding : "10px" , flexDirection: "column"})}
`

const ImgContainer = styled.div`
    flex:1;
`

const Image = styled.img`
    width: 100%;
    object-fit: cover;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;   
    ${mobile({ padding : "10px"})}
`

const Title = styled.h1`
    font-weight: 200;
`

const Desc = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({width : "100%"})}
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({width : "100%"})}
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid #b65fbf;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Button = styled.button`
    padding: 15px;
    border: 2px solid #b65fbf;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #b65fbf;
    }
`


function Product() {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src={brownshoes}/>
            </ImgContainer>
            <InfoContainer>
                <Title>Brown Airforces</Title>
                <Desc>
                    The Brown Nike Air Force  brings back the iconic design of
                    the '82 original with suede leather that's soft and fuzzy.
                    An Air-Sole unit cushions your feet for all-day comfort.Adjust
                     the ankle strap for a perfect fit.
                </Desc>
                <Price>$ 39</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Colors</FilterTitle>
                        <FilterColor color="brown"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="gray"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>39</FilterSizeOption>
                            <FilterSizeOption>40</FilterSizeOption>
                            <FilterSizeOption>41</FilterSizeOption>
                            <FilterSizeOption>42</FilterSizeOption>
                            <FilterSizeOption>43</FilterSizeOption>
                            <FilterSizeOption>44</FilterSizeOption>
                            <FilterSizeOption>45</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <RemoveIcon/>
                        <Amount>1</Amount>
                        <AddIcon/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product