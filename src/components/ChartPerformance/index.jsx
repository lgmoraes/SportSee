import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
} from 'recharts'

/**
 * Render a radar graph, showing user performances
 * @param {Promise} data Contain performance indices (cardio, energy, endurance,
 * strength, speed, intensity)
 */
function ChartPerformance({ data }) {
  const [performances, setPerformances] = useState(null)

  useEffect(() => {
    data.then((res) => {
      setPerformances(res)
    })
  })

  return performances === null ? null : (
    <ResponsiveContainer width="99%" height={200}>
      <RadarChart data={performances} cx={'50%'} cy={'50%'} outerRadius={'70%'}>
        <PolarGrid strokeWidth={1.2} radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          tickSize={15}
          tick={{
            fill: 'white',
            fontSize: 12,
            fontWeight: '500',
          }}
        />
        <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  )
}

ChartPerformance.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ChartPerformance
