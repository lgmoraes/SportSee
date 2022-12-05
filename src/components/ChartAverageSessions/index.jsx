import { useState, useEffect } from 'react'
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts'

/**
 * Render a graph tracking the user's activity time during their week
 * @param {Promise} data Returns the length of user sessions
 */
function ChartAverageSessions({ data }) {
  const [sessions, setSessions] = useState(null)

  useEffect(() => {
    data.then((res) => {
      setSessions(res)
    })
  })

  return sessions === null ? null : (
    <ResponsiveContainer width="99%" height={180}>
      <LineChart
        data={sessions}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <defs>
          <linearGradient
            id="colorUv"
            x1="0"
            y1="0"
            x2="100%"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="rgba(255, 255, 255, 0.2)" />
            <stop offset="1" stopColor="rgba(255, 255, 255, 1)" />
          </linearGradient>
        </defs>
        <XAxis
          tick={{ fill: 'rgba(255,255,255,0.5)', fontWeight: '500' }}
          tickLine={0}
          axisLine={false}
          dataKey="day"
        />
        <Tooltip
          content={LineChartTooltip}
          wrapperStyle={{ outline: 'none' }}
          cursor={false}
        />
        <Line
          type="natural"
          dataKey="sessionLength"
          stroke="url(#colorUv)"
          strokeWidth={2}
          dot={false}
          activeDot={{
            fill: 'white',
            stroke: 'rgba(255, 255, 255, 0.2)',
            strokeWidth: 8,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

/**
 * Custom renderer for the LineChart tooltip
 * Params are send by recharts
 */
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
