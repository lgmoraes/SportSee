import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
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
        <ResponsiveContainer
          className="activity__graphsUp"
          width="100%"
          height={200}
        >
          <BarChart
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
        </ResponsiveContainer>
        <div className="activity__graphsDown">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
      <div className="activity__expenses">
        <div>expenses</div>
      </div>
    </div>
  )
}

export default Activity
