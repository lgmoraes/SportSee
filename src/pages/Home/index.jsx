import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import HomeTitle from '../../components/HomeTitle'
import Activity from '../../components/Activity'

import api from '../../api/Api'

/**
 * Root element of the app
 */
function Home() {
  const { userId } = useParams()

  useEffect(() => {
    document.title = 'SportSee'
  })

  return (
    <div className="home">
      <Sidebar />
      <main className="home__content">
        <HomeTitle data={api.getUser(userId)} />
        <Activity userId={userId} />
      </main>
    </div>
  )
}

export default Home
