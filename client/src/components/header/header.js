import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/images/GUS_Logo@2x.png';
import Burger from '../button/Burger';

const Navbar = styled.div`
  width: 100%;
  background-color: #FFFFFF;
  margin: 0;
  height: 55px;
  position: fixed;
  z-index: 999;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #5D2DE3;
  // box-shadow: 0px 2px 8px #999;
`;
const NavItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Brand = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
`;
const LogoImg = styled.img`
  height: 20%;
  width: 20%;
  margin-right: 12px;
`;
const NavItems = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 24%;
  // color: #2E2F40; 
`;
const NavItem = styled.li`
  list-style-type: none;
  font-size: 16px;
  font-weight: 500;
`;
const NavItemLink = styled.a`
  color: inherit;
  text-decoration: none;
`

export const FullHeader = (props) => {
  return (
    <Navbar>
      <NavItemWrapper className="outer_container">
        <Brand>
          <LogoImg src={Logo} alt="company logo" />
          GloUpSocial
        </Brand>
        <NavItems>
          <NavItem>
            <NavItemLink href="/about">
              About
            </NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink href="/pricing">
              Pricing
            </NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink href="/login">
              Login
            </NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink href="/apply">
              Apply Now
            </NavItemLink>
          </NavItem>
        </NavItems>
      </NavItemWrapper>
    </Navbar>
  )
}

export const MobileHeader = (props) => {
  return (
    <Navbar>
      <NavItemWrapper className="outer_container">
        <Brand>
          <LogoImg src={Logo} alt="company logo" />
          GloUpSocial
        </Brand>
        <Burger toggle={props.toggle} active={props.active}/>
      </NavItemWrapper>
    </Navbar>
  )
}

export const AppHeader = (props) => {
  let mainHeader = props.size < 1180 ? MobileHeader(props) : FullHeader(props);
  return mainHeader;
}