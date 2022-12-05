import { useState, useEffect } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

function ChartActivity({ data }) {
  const [sessions, setSessions] = useState(null)

  useEffect(() => {
    data.then((res) => {
      setSessions(res)
    })
  })

  return sessions === null ? null : (
    <ResponsiveContainer
      className="activity__graphsUp"
      width="99%"
      height={200}
    >
      <BarChart
        data={sessions}
        barSize={7}
        margin={{
          top: 30,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis tickSize={20} tickLine={0} dataKey="day" />
        <YAxis
          tickSize={20}
          tickLine={0}
          axisLine={false}
          orientation="right"
        />
        <Tooltip content={BarChartTooltip} wrapperStyle={{ outline: 'none' }} />
        <Legend
          iconType="circle"
          iconSize={10}
          align="right"
          verticalAlign="top"
        />
        <Bar dataKey="kilogram" fill="#282D30" radius={[3, 3, 0, 0]} />
        <Bar dataKey="calories" fill="#E60000" radius={[3, 3, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

const BarChartTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="activity__barChartTooltip">
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}Kcal`}</p>
      </div>
    )
  }

  return null
}

export default ChartActivity
