import React from 'react'
import styled from 'styled-components'
import Selected from './Select'
import Fade from 'react-reveal/Fade'
import Rotate from 'react-reveal/Rotate'

const Hero = () => {
  return (
    <Wrapper>
      <article className='section__center center'>
        <Fade top cascade>
          <div className='title-wrapper'>
            <div className='title'>
              <h1 style={{ fontWeight: '550' }}>
                Your <span className='subtitle'>Money,</span>
                <br />
                Your <span className='subtitle'>rules. </span>
              </h1>
            </div>
            <p className='mainpara'>
              Powered by the Lightning Network we're on a mission to
              revolutionise the way people transact across the world.
              <br />
              Send and receive payments in a way that works for you. We support
              bitcoin, pound sterling and euro — but that's just the beginning.
            </p>
            <div className='btns' style={{ maxWidth: '600px' }}>
              <Selected />
              <button className='button action btn'>Register</button>
            </div>
          </div>
        </Fade>
        <Rotate top right>
          <div className='hero_img2'>
            <img
              src='https://bottlepay.com/_nuxt/assets/images/page-index/Hero-index-9bfce8c.webp'
              alt=''
            />
            <img
              className='topArr'
              src='https://bottlepay.com/_nuxt/assets/images/page-index/hero-image-right-0b39e20.png'
              alt=''
            />

            <img
              className='botArr'
              src='https://bottlepay.com/_nuxt/assets/images/page-index/hero-image-left-4575c2f.png'
              alt=''
            />
          </div>
        </Rotate>
      </article>
    </Wrapper>
  )
}

export default Hero
const Wrapper = styled.article`
  .center {
    color: var(--white);
    display: grid;
    justify-content: space-between;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10rem;
    align-items: center;
  }
  .btns {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr 1fr;
    /* text-align: center; */
    align-items: flex-end;
    /* justify-content: space-between; */
    justify-content: space-between;
  }
  .mainpara {
    color: var(--darkpara);
    font-weight: 500;
    font-size: 1.2rem;
  }
  /* ****************************************hero ************************************************/
  .hero_img2 {
    position: relative;
  }
  .hero_img2:hover .topArr {
    right: -35px;
  }
  .hero_img2:hover .botArr {
    right: 93.6%;
  }
  .topArr {
    position: absolute;
    top: -55px;
    right: -45px;
    z-index: 10;
    transition: 0.3s;
  }
  .botArr {
    position: absolute;
    right: 95%;
    top: 40%;
    transition: 0.3s;
  }
`
