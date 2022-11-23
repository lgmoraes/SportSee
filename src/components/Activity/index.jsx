import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

import activity from '../../api/activity.json'

const data = activity.data.sessions

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="activity__tooltip">
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}Kcal`}</p>
      </div>
    )
  }

  return null
}

function Activity() {
  return (
    <div className="activity">
      <div className="activity__graphs">
        <div className="activity__graphsUp">
          <BarChart
            width={500}
            height={300}
            data={data}
            barSize={7}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis tickSize={20} tickLine={0} />
            <YAxis
              tickSize={20}
              tickLine={0}
              axisLine={false}
              orientation="right"
            />
            <Tooltip content={CustomTooltip} />
            <Legend
              iconType="circle"
              iconSize={10}
              align="right"
              verticalAlign="top"
            />
            <Bar dataKey="kilogram" fill="#282D30" />
            <Bar dataKey="calories" fill="#E60000" />
          </BarChart>
        </div>
        <div className="activity__graphsDown"></div>
      </div>
      <div className="activity__expenses"></div>
    </div>
  )
}

export default Activity
