import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import { data } from '../FeaturedData'

const FeaturedItems = () => {
  return (
    <Wrapper>
      <article className='section__center second_S'>
        <Fade top cascade>
          <div className='features__items'>
            {data.map((card) => {
              const { id, src, title, para } = card
              return (
                <div className='features__item' key={id}>
                  <div className='icon'>
                    <img src={src} alt='' />
                  </div>
                  <div className='text'>
                    <h4 className='title'>{title}</h4>
                    <p className='subtitle2'>{para}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Fade>
      </article>
    </Wrapper>
  )
}

export default FeaturedItems
const Wrapper = styled.article`
  .features__item {
    display: grid;
    grid-template-columns: 52px 1fr;
    grid-gap: 10px 30px;
  }
  .features__items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 70px 60px;
  }
  .second_S {
    background-color: #20253f;
    border: 2px #121629;
    border-radius: 20px;
    padding: 80px;
  }
  .featuredIcon {
    max-width: 52px;
    max-height: 52px;
  }
  .subtitle2 {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: var(--darkpara);
  }
  .title {
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
    color: #fffffe;
  }
`
