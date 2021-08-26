import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Nav = () => {
  return (
    <Wrapper>
      <section className='section__center main'>
        <div className='left'>
          <h1>MyLogo</h1>

          <Link className='links' to='/'>
            personal
          </Link>

          <Link className='links' to='/bussiness'>
            bussinnes
          </Link>
        </div>

        <div className='right'>
          <Link className='links' to='/press'>
            press
          </Link>
          <Link className='links' to='/blogs'>
            blogs
          </Link>
          <Link className='links' to='/blogs'>
            App guide
          </Link>
          <button className='links' className='button'>
            Get the app
          </button>
        </div>
      </section>
    </Wrapper>
  )
}

export default Nav
const Wrapper = styled.header`
  /* padding: 10px 0; */
  /* height: 74px; */
  border-bottom: 1px solid #121629;
  .main {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;
  }
  .links:hover {
    transform: translatey(-5px);
  }
  .left h1 {
    margin-right: 60px;
  }
  .links {
    margin-right: 24px;
    display: inline-block;
    text-transform: uppercase;
    color: var(--darkpara);
    font-size: 11px;
    line-height: 24px;
    font-weight: 700;
    letter-spacing: 1.8px;
    cursor: pointer;
    transition: 0.3s;
  }
  .left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`
