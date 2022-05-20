import styled from 'styled-components'

export const HeaderMainDiv = styled.ul`
  height: 10vh;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  place-items: 0px;
  background-color: #ffffff;
  width: 90vw;
  list-style-type: none;
  padding-left: 0px;
  background-color: ${props => props.bgColor};
  width: 100%;
  padding-left: 20px;
  margin-bottom: 0px;
  padding-bottom: 0px;
`
