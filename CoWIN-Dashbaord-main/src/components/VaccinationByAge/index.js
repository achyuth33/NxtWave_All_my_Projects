import {PieChart, Pie, Legend, Cell} from 'recharts'

import {VaccinationByAgeContainer, Heading} from './styledComponents'

const VaccinationByAge = props => {
  const {vaccinationByAgeDetails} = props

  return (
    <VaccinationByAgeContainer>
      <Heading>Vaccination by age</Heading>
      <PieChart width={1000} height={300}>
        <Pie
          data={vaccinationByAgeDetails}
          cx="50%"
          cy="30%"
          outerRadius="60%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="44-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#64C2A6" />
        </Pie>

        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
        />
      </PieChart>
    </VaccinationByAgeContainer>
  )
}

export default VaccinationByAge
