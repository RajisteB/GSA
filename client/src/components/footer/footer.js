import React from 'react';
import styled from 'styled-components';
import GloLogo from '../../assets/images/GUS Logo.png';

const FooterWrapper = styled.div`
  width: 100%;
  background-color: #2E2F40;
  color: white;
  margin: 0px;
  padding: 15px 0px 10px;
  border-top: 1px solid rgba(200,214,229, 0.4);
  @media (min-width: 600px) {
    margin-top: 0px;
    border: none;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    margin-bottom: 20px;
  }
`;

const FooterLogo = styled.img`
  height: 90px;
  width: 90px;
`;

const FooterLogoText = styled.a`
  font-family: 'Quicksand', sans-serif;
  opacity: 0.7;
  color: white;
  text-decoration: none;
  font-size: 20px;
  padding-top: 20px;
  letter-spacing: 0.08rem;
  text-align: center;
  &:visited {
    color: white;
  }
`

const FooterSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 70px 0px 40px;
  @media (min-width: 900px) {
    flex-direction: row;
  } 
`; 

const FooterRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 12px 0;
  @media (min-width: 900px) {
    margin: 0px 4%;
  } 
`;

const Title = styled.h3`
  color: white;
  font-family: 'Quicksand', sans-serif;
  font-size: 14px; 
  font-weight: 500;
  letter-spacing: 1.2px;
`;

const FooterLink = styled.a`
  color: #EBEEF1;
  position: relative;
  font-family: 'Quicksand', sans-serif;
  font-size: 10px;
  letter-spacing: 1.4px;
  margin: 2px 0px;
  padding-bottom: 2px;
  opacity: 0.6;
  &:visited {
    color: white;
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    margin-top 20px;
    background-color: black;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s;
  }
  &:hover {
    color: #22A6B3;
    opacity: 1;
  }
  &:hover::after {
    transform-origin: bottom left;
    transform: scaleX(1);
    background-color: #22A6B3;
  }
`;

const FooterInfo = styled.div`
  width: 100%;
  border-top: 1px solid rgba(200,214,229, 0.4);
  color: rgba(200,214,229, 0.6);
  padding: 4px 0px;
  font-size: 12px;
  text-align: left;
  @media (min-width: 900px) {
    text-align: right;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="outer_container">
        <FooterSection>
          <LogoWrapper>
            <FooterLogo src={GloLogo} alt="footer logo" />
            <FooterLogoText href="/">
              GloUpSocial
            </FooterLogoText>
          </LogoWrapper>
          <FooterRow>
            <Title>My Account</Title>
            <FooterLink href="/login">Login to My Account</FooterLink>
            <FooterLink href="/dashboard/:id">Account Settings</FooterLink>
            <FooterLink href="/about">Eligibility Requirements</FooterLink>
            <FooterLink href="/signup">Memberships</FooterLink>
          </FooterRow>
          <FooterRow>
            <Title>Locations</Title>
            <FooterLink href="/login">New York, NY</FooterLink>
            <FooterLink href="/dashboard/:id">Philadelphia, PA</FooterLink>
            <FooterLink href="/about">Miami, FL</FooterLink>
            <FooterLink href="/signup">Los Angeles, CA</FooterLink>
          </FooterRow>
          <FooterRow>
            <Title>Contact</Title>
            <FooterLink href="mailto: info@gloupsocial.com">info@gloupsocial.com</FooterLink>
          </FooterRow>
        </FooterSection>
      </div>
      <div className="outer_container">
        <FooterInfo>
          All Rights Reserved.&nbsp;&nbsp;Copyright © 2019
        </FooterInfo>
      </div>
    </FooterWrapper>
  )
}

export default Footer;
