import React from 'react'
import styled from 'styled-components'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
const Guide = () => {
  return (
    <Wrapper>
      <section className='section__center center2'>
        <div className='container'>
          <div className='right'>
            <div className='icon'>
              <img
                src='https://bottlepay.com/_nuxt/7853d79bca0825ed7f9f1e62026a8f7e.svg'
                alt=''
              />
            </div>
            <div className='text'>
              <h4>Bottlepay 101</h4>
              <p>Your guide to everything Bottlepay, bitcoin, and beyond.</p>
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <a href='' className='link'>
                  Read The App Guide
                </a>
                <div style={{ marginLeft: '13px' }}>
                  <ArrowForwardIcon />
                </div>
              </div>
            </div>
          </div>

          <div className='left'>
            <div className='icon'>
              <img
                src='https://bottlepay.com/_nuxt/7853d79bca0825ed7f9f1e62026a8f7e.svg'
                alt=''
              />
            </div>
            <div className='text'>
              <h4>Bottlepay 101</h4>
              <p>Your guide to everything Bottlepay, bitcoin, and beyond.</p>
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <a href='' className='link'>
                  Read The App Guide
                </a>
                <div style={{ marginLeft: '13px' }}>
                  <ArrowForwardIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  )
}

export default Guide
const Wrapper = styled.section`
  border-top: 1px solid #121629;
  border-bottom: 1px solid #121629;
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .center2 {
    margin: 0 auto;
  }
  .container img {
    padding-top: 5px;
  }
  .link {
    font-weight: 700;
    position: relative;
    color: var(--button);
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s ease;
    align-items: center;
  }

  .right,
  .left {
    border-right: 1px solid #121629;
    display: grid;
    grid-template-columns: 40px 1fr;
    grid-template-rows: auto;
    padding: 57px 75px 55px 40px;
    grid-gap: 35px;
    transition: 0.4s;
  }
  .right:hover,
  .left:hover {
    background-color: #121629;
  }

  .left {
    border: none;
  }
  .right:hover svg,
  .left:hover svg {
    transform: translateX(40px);
  }

  svg {
    color: var(--button);
    transition: 0.4s;
  }
  .text {
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
  .text h4 {
    font-size: 24px;
    line-height: 32px;
    text-transform: capitalize;
    color: var(--white);
    font-weight: 700;
  }
  .text p {
    margin: 10px 0 20px;
    font-size: 16px;
    line-height: 24px;
    color: var(--darkpara);
    letter-spacing: 0.01em;
    opacity: 0.7;
    font-weight: 500;
  }
`
