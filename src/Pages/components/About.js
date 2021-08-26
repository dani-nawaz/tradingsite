import React from 'react'
import styled from 'styled-components'
const About = () => {
  return (
    <Wrapper>
      <div className='section__center center2'>
        <p>
          Bottlepay Ltd has been temporarily registered under the Money
          Laundering, Terrorist Financing and Transfer of Funds (Information on
          the Payer) Regulations 2017 as a cryptoasset business until 31 March
          2022, pending the determination of our application by the Financial
          Conduct Authority. Whilst your funds are held securely, they are not
          protected by the Financial Services Compensation Scheme and are not
          within the scope of the jurisdiction of the Financial Ombudsman
          Service
        </p>
      </div>
    </Wrapper>
  )
}

export default About
const Wrapper = styled.section`
  p {
    text-align: center;
    font-size: 14px;
    line-height: 29px;
    font-weight: 400;
    letter-spacing: 0.03em;
    text-align: center;
    color: var(--darkpara);
  }
  .center2 {
    padding: 60px 5px 30px;
    display: flex;
    /* align-items: center; */
    justify-content: center;
    margin: 0 auto;
  }
`
