import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from '../responsive'

const Container = styled.div`
  height: 60px;
  ${mobile({height : "50px"})}
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({padding : "10px 0px"})}
`

// LEFT RIGHT & CENTER might have diff sizes according how much text is in them, so to prevent this we give width to each one OR flex:1
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display : "none"})}
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  margin-left: 25px;
  padding: 5px;
  align-items: center;
`
const Input = styled.input`
  border: none;
  ${mobile({width : "50px"})}
`


const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({fontSize: "14px"})}
`


const Right = styled.div`
  flex: 1; 
  display: flex;
  align-items : center;
  justify-content: flex-end;
  ${mobile({flex: 2,justifyContent : "center"})}
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({fontSize: "12px" , marginLeft:"10px"})}
`


function Navbar() {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                  <Input placeholder='Search...'/>
                  <SearchIcon style={{color: "gray", fontSize:16}}/>
                </SearchContainer>
            </Left>

            <Center>
                <Logo>The Shoe Factory</Logo>
            </Center>

            <Right>
              <MenuItem>REGISTER</MenuItem>
              <MenuItem>SIGN IN</MenuItem>
              <MenuItem>
                    <Badge badgeContent={4} color="primary">
                      <ShoppingCartOutlinedIcon/>
                    </Badge>
              </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar