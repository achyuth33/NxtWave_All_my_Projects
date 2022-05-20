import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import {PlanetsAppContainer, Heading} from './styledComponents'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <PlanetsAppContainer data-testid="planets">
      <Heading>PLANETS</Heading>
      <Slider>
        {planetsList.map(eachPlanet => (
          <PlanetItem key={eachPlanet.id} planetDetails={eachPlanet} />
        ))}
      </Slider>
    </PlanetsAppContainer>
  )
}

export default PlanetsSlider
