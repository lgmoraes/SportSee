import { useState, useEffect } from 'react'
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
  const [user, setUser] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    document.title = 'SportSee'

    api
      .getUser(userId)
      .then((json) => setUser(json))
      .catch(() => {
        setError(true)
      })
  }, [])

  if (isNaN(Number(userId))) {
    return (
      <div>
        <p className="home__errorMessage">
          {userId} n'est pas un id utilisateur valide !
        </p>
      </div>
    )
  } else if (error) {
    return (
      <div>
        <p className="home__errorMessage">
          Impossible de charger les données pour cet utilisateur !
        </p>
      </div>
    )
  }

  return user === null ? null : (
    <div className="home">
      <Sidebar />
      <main className="home__content">
        <HomeTitle user={user} />
        <Activity userId={userId} />
      </main>
    </div>
  )
}

export default Home
