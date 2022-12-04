import { useEffect } from 'react'
import Sidebar from '../../components/Sidebar'
import HomeTitle from '../../components/HomeTitle'
import Activity from '../../components/Activity'

import api from '../../api/Api'

function Home() {
  useEffect(() => {
    document.title = 'SportSee'
  })

  return (
    <div className="home">
      <Sidebar />
      <main className="home__content">
        <HomeTitle data={api.getUser()} />
        <Activity />
      </main>
    </div>
  )
}

export default Home
