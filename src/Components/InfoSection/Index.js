import React from 'react';
import {Button} from '../ButtonElements';
// import ImgCar from "../../Images/svg-1.svg"
import { ReactComponent as ImageOne} from '../../Images/svg-1.svg';
import { Column2, Img, ImgWrap , InfoContainer ,InfoWrapper,InfoRow,Column1,TextWrapper,TopLine,Heading,SubTitle,BtnWrap} from './InfoElements';



const InfoSection = ({lightBg,id,imgStart,topLine,lightText,headline,darkText,description,buttonLabel,img,alt,primary,dark,dark2}) => {
    return (
        <>
          <InfoContainer lightBg={lightBg} id={id} >
              <InfoWrapper>
                  <InfoRow imgStart={imgStart}>
                      <Column1>
                      <TextWrapper>
                          <TopLine>{topLine}</TopLine>
                          <Heading lightText={lightText}>{headline}</Heading>
                          <SubTitle darkText={darkText}>{description}</SubTitle>
                          <BtnWrap>
                              <Button to='home'
                              smooth={true} 
                              duration={500}
                              spy={true}
                              exact="true"
                              offset={-80}
                              primary={primary ? 1 : 0}
                              dark = {dark ? 1 : 0}
                              dark2 = {dark2 ? 1 : 0}
                              >{buttonLabel}</Button>
                          </BtnWrap>
                      </TextWrapper>
                      </Column1>
                      <Column2>
                      <ImgWrap>
                      <ImageOne width='500px' height='500px'/> 
                      {/* <ImageTwo width='500px' height='500px'/> 
                      <ImageThree width='500px' height='500px'/>  */}

                      {/* <Img src={ImgCar} src={alt} /> */}
                      </ImgWrap>
                      
                      </Column2>
                  </InfoRow>
              </InfoWrapper>
          </InfoContainer>  
        </>
    )
}

export default InfoSection
