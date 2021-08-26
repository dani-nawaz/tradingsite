import React from 'react'
import { Inner, Container, Pane, Title, SubTitle, Img } from './Jumbotoron'
const Info = ({ children, direction = 'row', ...restProps }) => {
  return <Inner direction={direction}>{children}</Inner>
}

export default Info
Info.Container = function InfoContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}
Info.Pane = function InfoPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>
}
Info.Img = function InfoImg({ ...restProps }) {
  return <Img {...restProps} />
}
Info.Title = function InfoTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}
Info.SubTitle = function InfoSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>
}
