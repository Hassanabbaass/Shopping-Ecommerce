import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import Nike from '../Assets/nikecube.png'
import Jordans from '../Assets/jordans.png'
import Sitting from '../Assets/sitting.png'
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;

    //because we used position absolute in the arrow styled.div we have to use relative here because Container is the parent
    position: relative;

    // to hide the slides because if u dont u will have them beside each other 
    overflow: hidden;

    ${mobile({display : "none"})}
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7ff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    //to position the arrows on the left and right in the middle of the page
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.7;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;

    // the functionalitiy of the handleclick is just changine the transform value 
    /* transform: translateX(0vw); */
    transform: translateX(${props=>props.slideIndex * -100}vw);
    transition: all 1s ease-in;
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: ${props=> props.bg };
`

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`
const Image = styled.img`
    height: 90%;
    
`


const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
     margin   : 50px 0px;
     font-size: 20px;
     font-weight: 500;
     letter-spacing: 3px;
`
const Btn = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

function Slider() {

    const [slideIndex, setSlideIndex] = useState()

    const handleClick = (direction) => {

        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        }
        else{
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
        }

    };

  return (
    <Container>
        {/* for the arrows we use props because they are the same but each one has a direction
            so , when the arrow is right it will have diff style than the left one 
            CHECK THE DDIFFERENCE IN THE ARROW STYLED COMPONENT */}
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlinedIcon/>
        </Arrow>

        <Wrapper slideIndex={slideIndex}>
            <Slide bg="#E8bffb">
                <ImgContainer>
                    <Image src={Nike} />
                </ImgContainer>
                <InfoContainer>
                    <Title> BEST SHOES IN TOWN</Title>
                    <Desc> A great collection of shoes from every brand! New arrivals each week !</Desc>
                    <Btn>Show Now</Btn>
                </InfoContainer>                
            </Slide>

            <Slide bg="#ffcab6">
                <ImgContainer>
                    <Image src={Sitting} />
                </ImgContainer>
                <InfoContainer>
                    <Title>SALE ALL YEAR LONG !</Title>
                    <Desc> We always have discounts on many items all year!</Desc>
                    <Btn>Show Now</Btn>
                </InfoContainer>                
            </Slide>

            <Slide bg="#E6E6FA">
                <ImgContainer>
                    <Image src={Jordans} />
                </ImgContainer>
                <InfoContainer>
                    <Title>BUY FROM ANY CATEGORY YOU LIKE </Title>
                    <Desc> Choose the category you want and start shopping now!</Desc>
                    <Btn>Show Now</Btn>
                </InfoContainer>                
            </Slide>           
        </Wrapper>

        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlinedIcon/>
        </Arrow>

    </Container>
  )
}

export default Slider