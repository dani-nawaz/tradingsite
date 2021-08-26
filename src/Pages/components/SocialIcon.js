import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TelegramIcon from '@material-ui/icons/Telegram'
import styled from 'styled-components'
const data = [
  {
    id: 1,
    link: 'https:www.facebook.com',
    svg: <FacebookIcon />,
  },
  {
    id: 2,
    link: 'https:www.facebook.com',
    svg: <InstagramIcon />,
  },
  {
    id: 3,
    link: 'https:www.facebook.com',
    svg: <LinkedInIcon />,
  },
  {
    id: 4,
    link: 'https:www.facebook.com',
    svg: <TelegramIcon />,
  },
]
const SocialIcon = () => {
  return (
    <Wrapper>
      <div className='social'>
        {data.map((link) => {
          return <a href={link.link}>{link.svg}</a>
        })}
      </div>
      <div className='devIntro'>2021 Bottle Pay. All rights reserved.</div>
      <div className='devIntro'>
        Developed by <span className='span'>D&H </span>
      </div>
    </Wrapper>
  )
}

export default SocialIcon
const Wrapper = styled.section`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-rows: 1fr 1fr;
  /* grid-column-gap: 1rem; */
  .devIntro {
    text-align: center;
    margin-top: 2rem;
    opacity: 0.6;
    color: var(--darkpara);
  }
  .span {
    color: var(--button);
    opacity: 1;
    font-weight: 500;
  }
  div svg {
    color: var(--button);
    font-size: 25px;
  }
  div a {
    display: inline-block;
    font-size: 25px;
    height: 40px;
    width: 50px;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0 16px;
    transition: 0.4s linear;
    position: relative;
  }
  div a::before,
  div a::after {
    content: '';
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    transition: 0.4s linear;
  }
  div a:hover {
    transform: scale(0.8);
  }
  div a:hover::before {
    border-left: 4px solid var(--button);
    border-right: 4px solid var(--button);
    transform: skewX(20deg);
  }
  div a:hover::after {
    border-top: 4px solid var(--button);
    border-bottom: 4px solid var(--button);
    transform: skewY(-20deg);
  }
`
