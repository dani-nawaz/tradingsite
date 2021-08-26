import React from 'react'
import styled from 'styled-components'
const Number = () => {
  return (
    <Wrapper className='section'>
      <h3>Contact us</h3>
      <a href=''> business@bottlepay.com</a>
    </Wrapper>
  )
}

export default Number
const Wrapper = styled.section`
  padding: 60px 0 70px;
  text-align: center;
  margin-top: 8rem;
  border-top: 1px solid #121629;
  border-bottom: 1px solid #121629;
  h3 {
    font-size: 36px;
    margin-bottom: 15px;
    font-weight: 700;
    color: var(--white);
  }
  a {
    color: var(--button);
    font-weight: 400;
    font-size: 21px;
    line-height: 28px;
    letter-spacing: 0.01em;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s ease;
    opacity: 0.9;
  }
  a:hover {
    opacity: 1;
  }
`
