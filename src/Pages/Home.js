import React from 'react'
import styled from 'styled-components'
import Info from './components/Info'
import JumboData from './components/JumboData.json'
import Slide from 'react-reveal/Slide'
import BlogsCards from './components/BlogsCards'
import Hero from './components/Hero'
import FeaturedItems from './components/FeaturedItems'
import Accordion from './components/Accordion'
import { AccData } from './components/AccData'
import Acc from './components/Acc'
const Home = () => {
  return (
    <Wrapper className='section'>
      <Hero />
      <FeaturedItems />
      <article className='section__center jumbo'>
        <Info.Container>
          {JumboData.map((item) => {
            console.log(item)
            return (
              <Slide left>
                <Info key={item.id} direction={item.direction}>
                  <Info.Pane>
                    <Info.Img src={item.img} />
                  </Info.Pane>
                  <Info.Pane>
                    <Info.Title>{item.title}</Info.Title>
                    <Info.SubTitle>{item.subtitle}</Info.SubTitle>
                  </Info.Pane>
                </Info>
              </Slide>
            )
          })}
        </Info.Container>
      </article>
      <Accordion />

      <BlogsCards />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: var(--blue);

  .action {
    width: 150px;
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

  .button {
    text-transform: uppercase;
    border-radius: 8px;
    text-align: center;
    margin-bottom: 10px;
    transition: all 0.3s ease;
    box-shadow: none;
    cursor: pointer;
    outline: none;
    border: none;
    font-size: 14px;
    line-height: 21px;
    font-weight: 700;
    letter-spacing: 0.11em;
    padding: 18px 24px;
  }
`
export default Home
