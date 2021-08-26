import React from 'react'
import styled from 'styled-components'
import Acc from './Acc'
import { AccData } from './AccData'
const Accordion = () => {
  return (
    <Wrapper>
      <article className='section__center accord'>
        <div className='accHead'>
          <h1>
            Frequently Asked <span className='underLine'>Questions</span>
          </h1>
        </div>
        <div className='Acc'>
          <Acc Questions={AccData} />
        </div>
      </article>
    </Wrapper>
  )
}

export default Accordion
const Wrapper = styled.section`
  .accord {
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
  .accHead h1 {
    text-align: left;
    padding: 25px 100px 0 0;
    font-weight: 700;
    font-size: 48px;
    line-height: 54px;
    color: var(--white);
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
    background: url('https://bottlepay.com/_nuxt/d40f35fc52eb7f4ad408339151e933dd.svg');
    background-size: 100% auto;
    background-repeat: no-repeat;
  }
`
