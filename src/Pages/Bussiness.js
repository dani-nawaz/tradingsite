// import { styled } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import Pulse from 'react-reveal/Pulse'
const Bussiness = () => {
  return (
    <Wrapper classname='section'>
      <Pulse>
        <article className='section__center main'>
          <div className='container'>
            <div className='text'>
              <h1 className='title'>
                We <span className='underLine'>break down</span> payment
                barriers
              </h1>
              <p className='mainpara'>
                It's time for payment models to evolve with the times - so let's
                rewrite the rules. Wave goodbye to middlemen and fixed fees, and
                start leveraging the power of global micropayments.
              </p>
              <button className='button '>Get in Touch</button>
            </div>
            <div className='hero__image'>
              <img
                className='botArr'
                src='https://bottlepay.com/_nuxt/4a88f94d7a8de07371b316a371f1245f.svg'
                alt=''
              />
              <img
                src='https://bottlepay.com/_nuxt/assets/images/page-business/Top-Hero-Image-7d5ba97.png'
                alt=''
              />
              <img
                className='topArr'
                src='https://bottlepay.com/_nuxt/18f8383a3f85a510ac335b21360e3b78.svg'
                alt=''
              />
            </div>
          </div>
        </article>
      </Pulse>
    </Wrapper>
  )
}

export default Bussiness
const Wrapper = styled.section`
  margin-top: 10rem;
  .container {
    display: grid;
    grid-template-columns: 50% 50%;
    text-align: center;
  }
  .botArr {
    position: absolute;
    z-index: 2;
    bottom: -30px;
    left: -80px;
    transition: 0.4s;
  }
  .topArr {
    position: absolute;
    z-index: 2;
    top: -100px;
    left: 59%;
    transition: 0.4s;
  }
  .hero__image {
    position: relative;
    z-index: 1;
  }
  .hero__image:hover .topArr {
    left: 55%;
  }
  .hero__image:hover .botArr {
    left: -70px;
  }
  .text {
    margin: 0 0 50px;
    text-align: left;
  }
  .mainpara {
    color: var(--darkpara);
    font-weight: 500;
    font-size: 1.2rem;
  }
  .underLine {
    position: relative;
    z-index: 1;
  }
  .underLine:after {
    content: '';
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 0;
    right: 0;
    height: 9px;
    background: url('https://bottlepay.com/_nuxt/f459b9ed8406d00c498c52d233717802.svg');
    background-size: 100% auto;
    background-repeat: no-repeat;
  }
  .title {
    font-size: 55px;
    line-height: 72px;
    font-weight: 700;
    letter-spacing: -0.02em;
    text-transform: capitalize;
    color: #fffffe;
  }
`
