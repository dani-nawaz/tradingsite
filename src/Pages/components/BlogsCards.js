import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TelegramIcon from '@material-ui/icons/Telegram'
import Fade from 'react-reveal/Fade'

const data = [
  {
    id: 1,
    category__name: 'Tech',
    time: 6,
    title: 'Lorem ipsum dolor sit amet.',
    name: 'battleplay',
    date: 'May 17, 2021',
  },
  {
    id: 1,
    category__name: 'Bitcoin',
    time: 2,
    title: 'Lorem ipsum dolor sit amet.',
    name: 'bottle',
    date: 'Feb 17, 2021',
  },
  {
    id: 1,
    category__name: 'Blog',
    time: 9,
    title: 'Lorem ipsum dolor sit amet.',
    name: 'battleplay',
    date: 'May 17, 2021',
  },
  {
    id: 1,
    category__name: 'NewD',
    time: 1,
    title: 'Lorem ipsum dolor sit amet.',
    name: 'battleplay',
    date: 'May 17, 2021',
  },
]

const BlogsCards = () => {
  return (
    <Wrapper className='section'>
      <Fade bottom>
        <section className='section__center'>
          <div className='container'>
            {data.map((card) => {
              return (
                <div className='card' key={card.id}>
                  <div className='text'>
                    <div className='category'>
                      <div className='category__name'>
                        {card.category__name}
                      </div>
                      <span className='dot'></span>
                      <div className='time'>{card.time} min</div>
                    </div>
                    <span className='title'>{card.title}</span>
                    <div className='writer'>
                      <div className='avatar'>
                        <img
                          src='https://images.prismic.io/bottlepay/7e27f77d-bdba-44d4-a97c-6ef3101b5696_Twitter_Profile_pic.png?auto=compress,format'
                          alt=''
                        />
                      </div>
                      <div className='writer__text'>
                        <div className='name --i:1'>{card.name}</div>
                        <div className='date --i:2'>{card.date}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </Fade>
    </Wrapper>
  )
}

export default BlogsCards
const Wrapper = styled.article`
  .container {
    display: grid;
    padding: 0;
    grid-row-gap: 23px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-auto-rows: 364px;
    grid-auto-flow: dense;
  }
  .category__name {
    font-size: 16px;
    line-height: 28px;
    font-weight: 400;
    letter-spacing: 0.01em;
    color: var(--white);
  }
  .writer__text .name,
  .date {
    color: var(--white);
    text-transform: capitalize;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    letter-spacing: 0.01em;
  }
  .writer__text .date {
    color: var(--darkpara);
  }
  .writer__text {
    transition: 0.5s;
    transform: translatey(40px);
    opacity: 0;
    transition-delay: calc(0.1s * var(--i));
  }
  .card:hover .writer__text {
    transform: translatey(0px);
    opacity: 1;
  }
  .avatar {
    position: relative;
    display: inline-block;
    transition: all 1s ease;
    overflow: hidden;
    box-sizing: border-box;
    overflow: visible;
    width: 60px;
    height: 60px;
    margin-right: 15px;
  }
  .avatar img {
    height: inherit;
    width: inherit;
    border-radius: 50%;
  }
  .time {
    display: inline;
    opacity: 0.7;
    font-weight: 400;
    color: var(--darkpara);
    letter-spacing: 0.01em;
  }
  .dot {
    display: inline-block;
    background: #73cc00;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    margin: 0 10px 3px;
  }
  .category {
    display: flex;
    align-items: center;
  }
  .card {
    position: relative;
    background-color: rgba(255, 255, 255, 0.05);
    margin: 20px;
    box-shadow: var(--shadow-3);
    border-radius: var(--borderRadius);
    /* display: grid; */
    justify-content: center;
    align-items: center;

    cursor: pointer;
    z-index: 1;
    display: block;
    overflow: hidden;
    opacity: 0.7;
    transition: 0.4s;
  }
  .card:hover {
    opacity: 1;
  }
  .text {
    display: grid;
    grid-template-rows: 25px 1fr 52px;
    padding: 48px 45px 65px;
    grid-gap: 30px;
  }
  .title {
    font-size: 22px;
    line-height: 32px;
    font-weight: 700;
    letter-spacing: 0;
  }
  .writer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    grid-template-rows: 1fr 26px;
  }
  /* ================= */
`
