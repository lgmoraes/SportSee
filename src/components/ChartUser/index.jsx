import React from 'react'
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from 'recharts'

function ChartUser({ data }) {
  return (
    <React.Fragment>
      <ResponsiveContainer width="99%" height={260}>
        <RadialBarChart
          width={730}
          height={250}
          innerRadius="80%"
          data={[{ name: 'user', value: data.score }]}
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
          {data.data.score * 100}%
        </span>
        <br />
        de votre
        <br />
        objectif
      </p>
      <p className="activity__objectif-title">Score</p>
    </React.Fragment>
  )
}

export default ChartUser
