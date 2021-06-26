import React , {useState} from 'react';
import Video from '../../Videos/Video.mp4';

import {HeroContainer , HeroBg , VideoBg , HeroContent , HeroH1 ,HeroP , HeroBtnWrapper,ArrowForward,ArrowRight} from './HeroElements'
import {Button} from '../ButtonElements';


const HeroSection = () => {

    const[hover,setHover] = useState(false)
   const onHover = () =>{
       setHover(!hover)
   }
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg loop autoPlay muted src={Video} type="Video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Virtual bankingb mode easy
                </HeroH1>
                <HeroP>
                    sign up
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>Get started {hover ? <ArrowForward/> : <ArrowRight/>}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
