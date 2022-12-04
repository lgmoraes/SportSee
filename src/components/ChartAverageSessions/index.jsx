import { useState, useEffect } from 'react'
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts'

function ChartAverageSessions({ data }) {
  const [sessions, setSessions] = useState(null)

  useEffect(() => {
    data.then((res) => {
      setSessions(res)
    })
  })

  return sessions === null ? null : (
    <ResponsiveContainer width="99%" height={260}>
      <LineChart
        data={sessions}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis
          tick={{ fill: 'rgba(255,255,255,0.5)', fontWeight: 'bold' }}
          tickLine={0}
          axisLine={false}
          dataKey="day"
        />
        <Tooltip
          content={LineChartTooltip}
          wrapperStyle={{ outline: 'none' }}
        />
        <Line
          type="natural"
          dataKey="sessionLength"
          stroke="white"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

const LineChartTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="activity__performanceTooltip">
        <p>{`${payload[0].value} min`}</p>
      </div>
    )
  }

  return null
}

export default ChartAverageSessions
