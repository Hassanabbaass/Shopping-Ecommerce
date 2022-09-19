import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';
import { mobile } from '../responsive';

const Container = styled.div`
    height: 60vh;
    background-color: #E8bffb;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    ${mobile({fontSize : "50px"})}
`
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({textAlign : "center"})}
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({width : "80%"})}
`
const Input = styled.input`
    border:none;
    flex: 8; //or width 80%
    padding-left: 20px;
`
const Button = styled.button`
    flex: 2; // or width 20%
    border: none;
    background-color: #b65fbf;
    color: white;
`

function Newsletter() {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Subscribe to our newsletter to get news about our latest products</Desc>
        <InputContainer>
            <Input placeholder='Your Email'/>
            <Button>
                <SendIcon/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter