import ChartActivity from '../ChartActivity'
import ChartAverageSessions from '../ChartAverageSessions'
import ChartPerformance from '../ChartPerformance'
import ChartUser from '../ChartUser'
import Expenses from '../Expenses'

import activity from '../../api/mocks/activity.json'
import averageSessions from '../../api/mocks/average-sessions.json'
import performance from '../../api/mocks/performance.json'
import user from '../../api/mocks/user.json'

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

function Activity() {
  return (
    <section className="activity">
      <div className="activity__graphs">
        <ChartActivity data={activity.data} />
        <div className="activity__graphsDown">
          <div className="activity__averageSessions">
            <ChartAverageSessions data={averageSessions} />
          </div>
          <div className="activity__performance">
            <ChartPerformance data={getPerformanceData()} />
          </div>
          <div className="activity__objectif">
            <ChartUser data={user} />
          </div>
        </div>
      </div>
      <Expenses data={user} />
    </section>
  )
}

export default Activity
