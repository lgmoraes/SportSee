import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
} from 'recharts'
import Expenses from '../Expenses'

import activity from '../../api/activity.json'
import averageSession from '../../api/average-sessions.json'

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
    <section className="activity">
      <div className="activity__graphs">
        <ResponsiveContainer
          className="activity__graphsUp"
          width="100%"
          height={200}
        >
          <BarChart
            data={activity.data.sessions}
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
            <Bar dataKey="kilogram" fill="#282D30" radius={[3, 3, 0, 0]} />
            <Bar dataKey="calories" fill="#E60000" radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <div className="activity__graphsDown">
          <div className="activity__averageSessions">
            <ResponsiveContainer
              className="activity__graphsUp"
              width="100%"
              height={260}
            >
              <LineChart
                data={averageSession.data.sessions}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis
                  tickLine={0}
                  axisLine={false}
                  tickFormatter={(n) => ['L', 'M', 'M', 'J', 'V', 'S', 'D'][n]}
                />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="sessionLength"
                  stroke="white"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
      <Expenses data="" />
    </section>
  )
}

export default Activity
