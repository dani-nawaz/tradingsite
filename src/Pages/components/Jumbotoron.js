import styled from 'styled-components/macro'
export const Inner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  width: 100%;
  @media (max-width: 1000px) {
    flex: column;
  }
`
export const Container = styled.div``
export const Pane = styled.div`
  width: 50%;
`
export const Img = styled.img``
export const Title = styled.h2`
  color: #fffffe;
  font-weight: 700;
`
export const SubTitle = styled.p`
  color: var(--darkpara);
  font-weight: 500;
`
