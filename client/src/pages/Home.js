import React from 'react';
import styled from 'styled-components';
import Wrapper from '../components/wrapper/wrapper';
import HeroImage from '../assets/images/Hero_Iphone.png';
import { Button, Icon } from 'semantic-ui-react';
import StartingImage from '../assets/images/Starting.png';
import DashboardImage from '../assets/images/Dashboard.png';
import MobileImage from '../assets/images/Mobile.png';
import SecureImage from '../assets/images/Secure.png';
import CalendarImage from '../assets/images/Calendar.png';
import ReviewImages from '../assets/images/Reviews.png';
import UserImage from '../assets/images/Love.png';
import ProcessImage from '../assets/images/Process.png';
import SaasImage from '../assets/images/Saas.png';
import TeamSignatureImage from '../assets/images/GloUp_Team.png';

const Hero = styled.div`
  font-family: 'Quicksand', sans-serif;
  display: flex;
  flex-direction: column;
  positon: relative;
  min-height: 50vh;
  @media (min-width: 1200px) {
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    min-height: 80vh;
  }
`;
const HeroImg = styled.img`
  display: none;
  @media (min-width: 1200px) {
    display: block;
    margin: 0;
    order: 2;
    width: 30%;
  }
`;
const HeroContentWrapper = styled.div`
  width: 100%;
  order: 2;
  @media (min-width: 1200px) {
    margin: 0;
    order: 2;
  }
`;
const HeroTitle = styled.h1`
  font-size: 65px;
  font-weight: 500;
  margin: 0px;
  padding: 0px;
  @media (max-width: 900px) {
    padding-top: 20px;
    font-size: 55px;
    line-height: 4rem;
  }
`;
const HeroContent = styled.h3`
  font-family: 'Quicksand', sans-serif;
  font-size: 22px;
  font-weight: 400;
  margin-top: 30px;
  width: 90%;
  color: black;
  @media (min-width: 1200px) {
    width: 70%;
  }
  @media (max-width: 900px) {
    font-size: 18px
    width: 80%;
  }
`;
const HeroBtns = styled.div`
  display: flex;
  margin-top: 50px;
  width: 100%;
  justify-content: flex-start;
  flex-wrap: wrap;
  @media (min-width: 1200px) {
      margin-top 50px;
      width: 60%;
    }
`;
const ColoredText = styled.span`
  background: linear-gradient(to right, #C194F5, #9046EB, #5D2DE3);
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Section = styled.div`
    display: flex;
    padding: 120px 0px;
    flex-direction: column;
    @media (min-width: 900px) {
      align-items: ${props => props.align};
      flex-direction: row;
    }
`;
const SubSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 0px;
    @media (min-width: 900px) {
      align-items: ${props => props.align};
      flex-direction: row;
    }
`;
const SectionWrap = styled.div`
  width: 100%;    
  margin: 30px 0px;
  @media (min-width: 900px) {
    width: 50%;
  }
`
const SectionImg = styled.img`
    width: 55%;
    height: auto;
    @media (max-width: 900px) {
      width: 35%;
    }
    @media (max-width: 500px) {
      width: 50%;
    }
`;
const SubSectionImg = styled.img`
    width: 32%;
    height: auto;
    margin: 100px;
`;
const MottoImg = styled.img`
    width: 20%;
    height: auto;
    margin: 100px;
`;
const SectionContent = styled.div`
    flex: 1;
    margin: 0 auto;
`;
const SectionTitle = styled.h2`
  font-size: 34px;
  font-weight: 500;
`;
const SectionSubTitle = styled.h4`
  font-size: 24px;
  font-weight: 500;
  width: 90%;
`;
const SectionP = styled.p`
  font-family: 'Quicksand', sans-serif;
  font-size: 18px;
  font-weight: 300;
  margin: 20px 0px;
  width: 97%;
  @media (max-width:900px) {
    width: 85%;
  }
`;
const VerticalSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 180px 0px 0px;
`;
const VerticalImg = styled.img`
  width: 70%;
  padding: 80px 0px;
  @media (max-width: 900px) {
    margin: 0px;
    width: 90%;
  }
`;
const Motto = styled.span`
  font-family: 'Quicksand', sans-serif;
  font-size: 64px;
  text-align: center;
  color: #2E2F40;
  opacity: 0.36;
  font-weight: 700;
  line-height: 6rem;
`;

const Home = () => {
  return (
    <Wrapper>
      <Hero className="inner_container" style={{ marginTop: '55px' }}>
        <HeroContentWrapper>
          <HeroTitle>Give your brand<br/>a&nbsp;<ColoredText>boost</ColoredText>.</HeroTitle>
          <HeroContent>
            Join our members only service and get full access to the ultimate social media marketing and analytics engine.
          </HeroContent>
          <HeroContent>
            Boost your brand across multiple channels, monitor your progress, discover partnership opportunities and watch your brand GloUp.
          </HeroContent>
          <HeroBtns>
            <Button style={{margin: '5px 40px 5px 0px'}} labelPosition="left" icon color="black" >
              <Icon name="info" />
              Learn More
            </Button>
            <Button style={{margin: '5px 0px 5px 0px'}}  labelPosition="left" icon color="violet">
              <Icon name="pencil alternate" />
              Apply Now
            </Button>
          </HeroBtns>
        </HeroContentWrapper>
        <HeroImg src={HeroImage} />
      </Hero>
      <Section className="inner_container" align="center">
        <SectionWrap>
          <SectionImg src={StartingImage} alt="section image"/>
        </SectionWrap>
        <SectionWrap>
          <SectionContent>
            <SectionTitle>
              Starting a brand is <br/>not easy...
            </SectionTitle>
            <SectionP>
              There are millions upon millions of social media profiles within a billion dollar online advertising economy and thousands of budding "entrepreneurs" all attempting to do the same thing, expand their brand in their industry. 
            </SectionP>
            <SectionP>
              Take Instagram for example. 95 million posts and 4.2 billion likes PER DAY with 72% of users saying they have bought a product from what they saw on IG. So, no matter the platform, the real question is how are you going to stand out?!
            </SectionP>
          </SectionContent>
        </SectionWrap>
      </Section>
      <VerticalSection className="inner_container" style={{textAlign: 'center'}}>
        <SectionSubTitle>
          Introducing GloUpSocial
        </SectionSubTitle>
        <VerticalImg src={DashboardImage} />
      </VerticalSection>
      <Section className="inner_container" align="flex-start">
        <SectionWrap>
          <SectionTitle>
            Features&nbsp;&rarr;
          </SectionTitle>
        </SectionWrap>
        <SectionWrap>
          <SectionSubTitle>
            Get a boost for your brand on 4 major social media platforms*
          </SectionSubTitle>
          <SectionP>
            GloUpSocial will expand your brand on Twitter, Instagram, Pinterest and YouTube, utilizing technology to automate your growth.
            <br/><br/>
            <span style={{fontSize: '12px'}}>* Beta version currently available only for Instagram</span>
          </SectionP>
          <br/><br/>
          <SectionSubTitle>
            Monitor your growth with daily updated statistics from your accounts
          </SectionSubTitle>
          <SectionP>
            Keep track of followers/subscriptions and other activity 
            over time to get key insights into your brand positioning 
            and growth.
          </SectionP>
          <br/><br/>
          <SectionSubTitle>
            Custom targeting to engage with the right audience for your product.
          </SectionSubTitle>
          <SectionP>
            Set your own targets and filters for ensuring you can get  
            the highest potential of active engagement with the best 
            people for your brand.
          </SectionP>
          <br/><br/>
          <SectionSubTitle>
            Find or request partnerships with other members, taking your brand to a new level.
          </SectionSubTitle>
          <SectionP>
            Interact with other members on the GloUpSocial partnership platform where you can take advantage of new offers and marketing opportunities, seeing even more growth for your business .
          </SectionP>
          <br/><br/>
          <SectionSubTitle>
            and more, including...
          </SectionSubTitle>
        </SectionWrap>
      </Section>
      <SubSection className="inner_container" align="center">
        <SectionWrap>
          <SectionImg src={CalendarImage} alt="calendar image"/>
        </SectionWrap>
        <SectionWrap>
          <SectionContent>
            <SectionSubTitle>
              Custom Scheduling
            </SectionSubTitle>
            <SectionP>
              Set your own schedule to ensure automation occurs at the most opportune time for your profile.
            </SectionP>
          </SectionContent>
        </SectionWrap>
      </SubSection>
      <SubSection className="inner_container" align="center">
        <SectionWrap>
          <SectionImg src={MobileImage} alt="calendar image"/>
        </SectionWrap>
        <SectionWrap>
          <SectionContent>
            <SectionSubTitle>
              Mobile Friendly Dashboard
            </SectionSubTitle>
            <SectionP>
              Keep up to date with everything even when you're on the go throughout the day.
            </SectionP>
          </SectionContent>
        </SectionWrap>
      </SubSection>
      <SubSection className="inner_container" align="center">
        <SectionWrap>
          <SectionImg src={SecureImage} alt="calendar image"/>
        </SectionWrap>
        <SectionWrap>
          <SectionContent>
            <SectionSubTitle>
              Secured Passwords
            </SectionSubTitle>
            <SectionP>
              All your social account passwords are encrypted for your security. 
            </SectionP>
          </SectionContent>
        </SectionWrap>
      </SubSection>
      <Section className="inner_container" style={{borderBottom: '2px solid #000000', opacity: 0.06}}/>
      <br/><br/><br/><br/>
      <SubSection className="inner_container" align="flex-start">
        <SectionWrap>
          <SectionTitle>
            Results&nbsp;&rarr;
          </SectionTitle>
        </SectionWrap>
      </SubSection>
      <SubSection className="inner_container" align="center">
        <SectionImg src={ReviewImages} alt="reviews"/>
        <SubSectionImg src={UserImage} alt="review image"/>
      </SubSection>
      <Section className="inner_container" style={{borderBottom: '2px solid #000000', opacity: 0.06}}/>
      <br/><br/><br/><br/>
      <SubSection className="inner_container" align="flex-start">
        <SectionWrap>
          <SectionTitle>
            Membership&nbsp;&rarr;
          </SectionTitle>
        </SectionWrap>
        <SectionWrap>
          <SectionSubTitle>
            Get Started Today
          </SectionSubTitle>
          <br/>
          <SectionImg src={ProcessImage} alt="application image"/>
          <SectionP>
            Don't wait any further. Apply now and get a response from us within 24 hours. Membership dues are a monthly fee of $49.99 but, you can try a trial version of our software for 3 days absolutely free.*
            <br/><br/>
            <span style={{fontSize: '12px'}}>* Credit card required</span>
          </SectionP>
          <SectionP style={{fontWeight: '400'}}>
            Apply Now &rarr;
          </SectionP>
          <SectionP style={{fontWeight: '400'}}>
            View Pricing Details &rarr;
          </SectionP>
          <SectionP style={{fontWeight: '400'}}>
            Contact Us &rarr;
          </SectionP>
        </SectionWrap>
      </SubSection>
      <br/><br/>
      <VerticalSection className="inner_container" style={{textAlign: 'center'}}>
        <VerticalImg src={SaasImage} />
        <Motto>
          We believe every brand<br/> should Glo Up.
        </Motto>
        <MottoImg src={TeamSignatureImage} alt="signature" />
      </VerticalSection>
    </Wrapper>
  )
}

export default Home;