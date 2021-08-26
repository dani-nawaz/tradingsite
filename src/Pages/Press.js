import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
const data = [
  {
    id: 1,
    img: 'https://bottlepay.cdn.prismic.io/bottlepay/ad3aff48-6385-4c6c-8db7-a6c87795d71c_Yahoo_Finance_Logo_2019.svg',
    title: 'Bottlepay rolls out across Europe',
    text: ' The app is powered by the Lightning Network and is on a missionto revolutionise the way billions of people transact across the world.',
  },
  {
    id: 2,
    img: 'https://images.prismic.io/bottlepay/9ed8bf3b-e6e2-444b-9517-ebd1a5b2b1b1_finextraresearch+%281%29.png?auto=compress,format',
    title: 'Bottlepay rolls out across Europe',
    text: ' The app is powered by the Lightning Network and is on a missionto revolutionise the way billions of people transact across the world.',
  },
  {
    id: 3,
    img: 'https://bottlepay.cdn.prismic.io/bottlepay/344c197e-8a4b-4a88-a367-3588283a0683_altfi-logo2.svg',
    title: 'Bottlepay rolls out across Europe',
    text: ' The app is powered by the Lightning Network and is on a missionto revolutionise the way billions of people transact across the world.',
  },
]
const Press = () => {
  return (
    <Fade top>
      <Wrapper className='section'>
        <div className='title__wrapper'>
          <h2 className='title2  '>
            Media & <span className='subtitle underLine '>Press</span>
          </h2>
        </div>
        <section>
          <article className='section__center'>
            <div className='cards'>
              {data.map((card) => {
                return (
                  <div key={card.id} className='card'>
                    <img src={card.img} alt='' />
                    <h4>{card.title}</h4>
                    <p>{card.text}</p>
                  </div>
                )
              })}
            </div>
          </article>
          <div className='Center'>
            <button className='button'>More</button>
          </div>
        </section>
      </Wrapper>
    </Fade>
  )
}

export default Press
const Wrapper = styled.section`
  span {
    display: inline-block;
    margin: 0 auto;
  }
  .Center {
    display: flex;
    margin-top: 4rem;
    justify-content: center;
  }
  p {
    font-size: 16px;
    line-height: 32px;
    font-weight: 500;
    color: var(--darkpara);
    letter-spacing: 1px;
  }
  h4 {
    font-weight: 700;
    color: var(--white);
    font-size: 24px;
    line-height: 32px;
  }

  img {
    max-height: 40px;
    max-width: 150px;
    height: 30px;
    -o-object-fit: contain;
    object-fit: contain;
  }
  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 430px;
    margin-top: 45px;
    gap: 24px;
  }
  .card {
    padding: 55px 45px 75px;
    display: grid;
    grid-template-rows: 35px 1fr 1fr;
    grid-gap: 40px;
    background-color: rgba(255, 255, 255, 0.05);
    box-shadow: var(--shadow-3);
    border-radius: var(--borderRadius);
    transition: 0.3s;
    cursor: pointer;
  }
  .card:hover {
    background-color: #121629;
    transform: translatey(-10px);
    /* background-color: red; */
  }
`
