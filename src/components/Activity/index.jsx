import ChartActivity from '../ChartActivity'
import ChartAverageSessions from '../ChartAverageSessions'
import ChartPerformance from '../ChartPerformance'
import ChartUser from '../ChartUser'
import Expenses from '../Expenses'

import api from '../../api/Api'

function Activity() {
  return (
    <section className="activity">
      <div className="activity__graphs">
        <ChartActivity data={api.getActivity()} />
        <div className="activity__graphsDown">
          <div className="activity__averageSessions">
            <ChartAverageSessions data={api.getAverageSessions()} />
          </div>
          <div className="activity__performance">
            <ChartPerformance data={api.getPerformance()} />
          </div>
          <div className="activity__objectif">
            <ChartUser data={api.getScore()} />
          </div>
        </div>
      </div>
      <Expenses data={api.getExpenses()} />
    </section>
  )
}

export default Activity
