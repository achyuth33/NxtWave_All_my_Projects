import {AiFillClockCircle} from 'react-icons/ai'

import {
  CourseTitleAndDurationContainer,
  CourseTitle,
  DurationContainer,
  Duration,
  CourseDescription,
  CourseTagsContainer,
  CourseTagItem,
  CourseTag,
} from './styledComponents'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <>
      <CourseTitleAndDurationContainer>
        <CourseTitle>{courseTitle}</CourseTitle>
        <DurationContainer>
          <AiFillClockCircle color="#171f46" />
          <Duration>{duration}</Duration>
        </DurationContainer>
      </CourseTitleAndDurationContainer>
      <CourseDescription>{description}</CourseDescription>
      <CourseTagsContainer>
        {tagsList.map(eachTag => (
          <CourseTagItem key={eachTag.id}>
            <CourseTag>{eachTag.name}</CourseTag>
          </CourseTagItem>
        ))}
      </CourseTagsContainer>
    </>
  )
}

export default CourseTimelineCard
