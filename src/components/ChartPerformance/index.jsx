import { useState, useEffect } from 'react'
import {
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
} from 'recharts'

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
            fontWeight: 'bold',
          }}
        />
        <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  )
}

export default ChartPerformance
