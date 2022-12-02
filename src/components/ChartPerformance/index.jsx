import {
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
} from 'recharts'

function ChartPerformance({ data }) {
  return (
    <ResponsiveContainer width="99%" height={200}>
      <RadarChart cx={'50%'} cy={'50%'} outerRadius={'70%'} data={data}>
        <PolarGrid strokeWidth={2} radialLines={false} />
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
