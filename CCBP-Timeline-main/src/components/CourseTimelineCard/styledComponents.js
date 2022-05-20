import styled from 'styled-components/macro'

export const CourseTitleAndDurationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`
export const CourseTitle = styled.h1`
  color: #171f46;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 700;
  line-height: 1.3;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`
export const DurationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Duration = styled.p`
  color: #171f46;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  margin-left: 4px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const CourseDescription = styled.p`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 1.5;
  margin-top: 0px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const CourseTagsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0px;
  margin: 0px;
`

export const CourseTagItem = styled.li`
  list-style-type: none;
`

export const CourseTag = styled.p`
  color: #25262c;
  background-color: #e2e8f0;
  font-family: 'Roboto';
  font-size: 10px;
  font-weight: 500;
  border-radius: 4px;
  line-height: 1.6;
  padding: 4px 8px;
  margin: 0px;
  margin-bottom: 8px;
  margin-right: 8px;
  @media screen and (min-width: 768px) {
    font-size: 12px;
    font-weight: 600;
  }
`
