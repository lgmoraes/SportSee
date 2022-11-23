import { useEffect } from 'react'
import Sidebar from '../../components/Sidebar'
import Activity from '../../components/Activity'

function Home() {
  useEffect(() => {
    document.title = 'SportSee'
  })

  return (
    <div className="home">
      <Sidebar />
      <main className="home__content">
        <div className="home__title">
          <h1>
            Bonjour <span className="home__name">Thomas</span>
          </h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        <Activity />
      </main>
    </div>
  )
}

export default Home
