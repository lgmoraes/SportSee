import React, { useState, useEffect } from 'react'
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from 'recharts'

function ChartUser({ data }) {
  const [score, setScore] = useState(null)

  useEffect(() => {
    data.then((res) => {
      setScore(res)
    })
  })

  return score === null ? null : (
    <React.Fragment>
      <ResponsiveContainer width="99%" height={260}>
        <RadialBarChart
          width={730}
          height={250}
          innerRadius="80%"
          data={[{ name: 'user', value: score }]}
          startAngle={-270}
          endAngle={90}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
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
        <span className="activity__objectif-score-percent">{score}%</span>
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
