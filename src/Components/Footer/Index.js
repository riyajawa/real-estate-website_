import React from 'react'
 import { animateScroll as scroll } from 'react-scroll'
import { FaFacebook, FaInstagram, FaLinkedin ,FaYoutube,FaTwitter} from 'react-icons/fa'
import { FooterContainer,FooterLink,FooterLinksContainer,FooterLinksItems,FooterLinksTitle,FooterLinksWrapper,FooterWrap,SocialIconLink,SocialIcons,SocialLogo,SocialMedia,SocialMediaWrap,WebsiteRights, } from './FooterElements'

const Footer = () => {
    const toggleHome = () => {  
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinksTitle> About us</FooterLinksTitle>
                                
                                <FooterLink to="/signin">How it works </FooterLink>
                                <FooterLink to="/signin">Testimonails </FooterLink>
                                <FooterLink to="/signin">Carrers</FooterLink>
                                <FooterLink to="/signin">Invesrors</FooterLink>
                                <FooterLink to="/signin">Terms</FooterLink>
                           
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinksTitle> About us</FooterLinksTitle>
                                
                                <FooterLink to="/signin">How it works </FooterLink>
                                <FooterLink to="/signin">Testimonails </FooterLink>
                                <FooterLink to="/signin">Carrers</FooterLink>
                                <FooterLink to="/signin">Invesrors</FooterLink>
                                <FooterLink to="/signin">Terms</FooterLink>
                           
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinksTitle> About us</FooterLinksTitle>
                                
                                <FooterLink to="/signin">How it works </FooterLink>
                                <FooterLink to="/signin">Testimonails </FooterLink>
                                <FooterLink to="/signin">Carrers</FooterLink>
                                <FooterLink to="/signin">Invesrors</FooterLink>
                                <FooterLink to="/signin">Terms</FooterLink>
                           
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinksTitle> About us</FooterLinksTitle>
                                
                                <FooterLink to="/signin">How it works </FooterLink>
                                <FooterLink to="/signin">Testimonails </FooterLink>
                                <FooterLink to="/signin">Carrers</FooterLink>
                                <FooterLink to="/signin">Invesrors</FooterLink>
                                <FooterLink to="/signin">Terms</FooterLink>
                           
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>Dolla</SocialLogo>
                        <WebsiteRights>Dolla o {new Date().getFullYear()}All rights reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                             <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                             <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                             <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                             <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                             <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
        
    )
}

export default Footer
