import React from 'react'
import { FooterCont, FooterDivSubCont, FooterDivSubLogo, FooterDivSubForm, FooterDivSubFormEmail, FooterDivSubFormBtn, FooterDivAbout, FooterDivAboutH1, FooterDivAboutText, FooterDivLinkCont } from '../../StylingComp/Home/Footer'

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
        </FooterDivAbout>
        Developed By Brilliant Makanju
        <FooterDivAbout>
          <FooterDivAboutH1>
            About Us
          </FooterDivAboutH1>
          <FooterDivAboutText>
            We Help provide Quality Shopping time with the best product in the market
          </FooterDivAboutText>
        </FooterDivAbout>
        <FooterDivAbout>
          <FooterDivAboutH1>
            About Us
          </FooterDivAboutH1>
          <FooterDivAboutText>
            We Help provide Quality Shopping time with the best product in the market
          </FooterDivAboutText>
        </FooterDivAbout>
        <FooterDivAbout>
          <FooterDivAboutH1>
            About Us
          </FooterDivAboutH1>
          <FooterDivAboutText>
            We Help provide Quality Shopping time with the best product in the market
          </FooterDivAboutText>
        </FooterDivAbout>
      </FooterDivLinkCont>
    </FooterCont>
  )
}

export default Footer