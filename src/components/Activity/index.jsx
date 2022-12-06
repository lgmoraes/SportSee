import ChartActivity from '../ChartActivity'
import ChartAverageSessions from '../ChartAverageSessions'
import ChartPerformance from '../ChartPerformance'
import ChartUser from '../ChartUser'
import Expenses from '../Expenses'

import api from '../../api/Api'

/**
 * Render all charts
 */
function Activity({ userId }) {
  return (
    <section className="activity">
      <div className="activity__graphs">
        <div className="activity__activity">
          <p className="activity__activity-title">Activité quotidienne</p>
          <ChartActivity data={api.getActivity(userId)} />
        </div>
        <div className="activity__graphsDown">
          <div className="activity__averageSessions">
            <p className="activity__averageSessions-title">
              Durée moyenne des sessions
            </p>
            <ChartAverageSessions data={api.getAverageSessions(userId)} />
          </div>
          <div className="activity__performance">
            <ChartPerformance data={api.getPerformance(userId)} />
          </div>
          <div className="activity__objectif">
            <ChartUser data={api.getScore(userId)} />
          </div>
        </div>
      </div>
      <Expenses data={api.getExpenses(userId)} />
    </section>
  )
}

export default Activity
