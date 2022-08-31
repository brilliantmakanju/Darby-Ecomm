import { faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { FooterCont, FooterDivSubCont, FooterDivSubLogo, FooterDivSubForm, FooterDivSubFormEmail, FooterDivSubFormBtn, FooterDivAbout, FooterDivAboutH1, FooterDivAboutText, FooterDivLinkCont, FooterDivContact, FooterDivContactH1, FooterDivContactText, FooterDivContactUl, FooterDivContactLi, FooterDivContactLiA, FooterInfoUl, FooterUlInfoLi, FooterInfo, FooterUlInfoH1 } from '../../StylingComp/Home/Footer'

const Footer = () => {
  return (
    <FooterCont>
      <FooterDivSubCont>
        <FooterDivSubLogo>
          Darby
        </FooterDivSubLogo>
        <FooterDivSubForm>
          <FooterDivSubFormEmail type='email' id='email' placeholder='Email' required />
          <label htmlFor='email'>Email</label>
          <FooterDivSubFormBtn type='submit'>Join Newsletter</FooterDivSubFormBtn>
        </FooterDivSubForm>
      </FooterDivSubCont>
      <FooterDivLinkCont>
        <FooterDivAbout>
          <FooterDivAboutH1>
            About Us
          </FooterDivAboutH1>
          <FooterDivAboutText>
            We Help provide Quality Shopping time with the best product in the market
          </FooterDivAboutText>
          <FooterDivContact>
            <FooterDivContactH1>
              Contact Us
            </FooterDivContactH1>
            <FooterDivContactUl>
              <FooterDivContactLi>
                <FontAwesomeIcon icon={faMailBulk} />
                <FooterDivContactLiA href='mailto:brilliantmakanju4@gmail.com'>brilliantmakanju4@gmail.com</FooterDivContactLiA>
              </FooterDivContactLi>
              <FooterDivContactLi>
                <FontAwesomeIcon icon={faPhone} />
                <FooterDivContactLiA href='tel:+2349015573136'>+2349015573136</FooterDivContactLiA>
              </FooterDivContactLi>
            </FooterDivContactUl>
          </FooterDivContact>
        </FooterDivAbout>
        <FooterInfo>
          <FooterUlInfoH1>
              Information
          </FooterUlInfoH1>
          <FooterInfoUl>
            <FooterUlInfoLi>
              Home
            </FooterUlInfoLi>
            <FooterUlInfoLi>
              About Us
            </FooterUlInfoLi>
            <FooterUlInfoLi>
              Blog
            </FooterUlInfoLi>
            <FooterUlInfoLi>
              Store
            </FooterUlInfoLi>
            <FooterUlInfoLi>
              Cart
            </FooterUlInfoLi>
          </FooterInfoUl>
        </FooterInfo>
        
      </FooterDivLinkCont>
    </FooterCont>
  )
}

export default Footer