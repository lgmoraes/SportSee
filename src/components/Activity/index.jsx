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
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from 'recharts'
import Expenses from '../Expenses'

import activity from '../../api/activity.json'
import averageSession from '../../api/average-sessions.json'
import performance from '../../api/performance.json'
import user from '../../api/user.json'

function getPerformanceData() {
  const data = []
  const cat = Object.values(performance.data.kind).map((c) => {
    if (c === 'cardio') return 'Cardio'
    else if (c === 'energy') return 'Energie'
    else if (c === 'endurance') return 'Endurance'
    else if (c === 'strength') return 'Force'
    else if (c === 'speed') return 'Vitesse'
    else if (c === 'intensity') return 'Intensité'
    return c
  })

  cat.forEach((kind, index) => {
    data.unshift({
      kind,
      value: performance.data.data[index].value,
    })
  })

  return data
}

const BarChartTooltip = ({ active, payload, label }) => {
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

function Activity() {
  return (
    <section className="activity">
      <div className="activity__graphs">
        <ResponsiveContainer
          className="activity__graphsUp"
          width="99%"
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
            <Tooltip
              content={BarChartTooltip}
              wrapperStyle={{ outline: 'none' }}
            />
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
            <ResponsiveContainer width="99%" height={260}>
              <LineChart
                data={averageSession.data.sessions}
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
          </div>
          <div className="activity__performance">
            <ResponsiveContainer width="99%" height={200}>
              <RadarChart
                cx={'50%'}
                cy={'50%'}
                outerRadius={'70%'}
                data={getPerformanceData()}
              >
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
          </div>
          <div className="activity__objectif">
            <ResponsiveContainer width="99%" height={260}>
              <RadialBarChart
                width={730}
                height={250}
                innerRadius="80%"
                data={[{ name: 'user', value: user.data.score }]}
                startAngle={-270}
                endAngle={90}
              >
                <PolarAngleAxis
                  type="number"
                  domain={[0, 1]}
                  angleAxisId={0}
                  tick={false}
                />
                <RadialBar
                  angleAxisId={0}
                  barSize={10}
                  cornerRadius={30 / 2}
                  fill="#FF0000"
                  minAngle={15}
                  dataKey={'value'}
                />
              </RadialBarChart>
            </ResponsiveContainer>
            <p className="activity__objectif-score">
              <span className="activity__objectif-score-percent">
                {user.data.score * 100}%
              </span>
              <br />
              de votre
              <br />
              objectif
            </p>
            <p className="activity__objectif-title">Score</p>
          </div>
        </div>
      </div>
      <Expenses data="" />
    </section>
  )
}

export default Activity
