import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EmailIcon from '@mui/icons-material/Email';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection : "column"})}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display : "none"})}
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`


const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`

function Footer() {
  return (
    <Container>
        <Left>
            <Logo>The Shoe Factory</Logo>
            <Desc>
                whatever whatever whatever whatever whatever whatever whatever whatever
                whatever whatever whatever whatever whatever whatever whatever whatever
                whatever whatever whatever whatever whatever whatever whatever whatever
            </Desc>
            <SocialContainer>
                <SocialIcon color='#3b5999'>
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon color='#e4405f'>
                    <InstagramIcon/>
                </SocialIcon>
                <SocialIcon color='#55acee'>
                    <TwitterIcon/>
                </SocialIcon>
            </SocialContainer>
        </Left>

        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Running Shoes</ListItem>
                <ListItem>Casual Shoes</ListItem>
                <ListItem>Boots</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>

        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <LocationOnIcon style={{marginRight:"15px"}}/>   Beirut, Lebanon
            </ContactItem>
            <ContactItem>
                <ContactPhoneIcon style={{marginRight:"15px"}}/>   +961 81 724460
            </ContactItem>
            <ContactItem>
                <EmailIcon style={{marginRight:"15px"}}/>   hassanabbascontact@gmail.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer