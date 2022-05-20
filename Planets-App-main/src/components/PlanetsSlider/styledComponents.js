import styled from 'styled-components'

export const PlanetsAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-image: url('https://assets.ccbp.in/frontend/react-js/planets-app/planets-bg-img.png');
  min-height: 100vh;
  padding: 40px;
  @media screen and (min-width: 768px) {
    padding: 80px;
  }
`

export const Heading = styled.h1`
  text-align: center;
  color: #05acff;
  font-family: 'Roboto';
  font-size: 35px;
  font-weight: 700;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 48px;
    margin-bottom: 64px;
  }
`
