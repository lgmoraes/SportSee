import { useEffect } from 'react'
import Sidebar from '../../components/Sidebar'

function Home() {
  useEffect(() => {
    document.title = 'SportSee'
  })

  return (
    <div className="home">
      <Sidebar />
      <main home__content>
        <h1>Bonjour</h1>
      </main>
    </div>
  )
}

export default Home
