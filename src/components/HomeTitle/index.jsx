import { useState, useEffect } from 'react'

function HomeTitle({ data }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    data.then((res) => {
      setUser(res)
      console.log(res)
    })
  })

  return user === null ? null : (
    <div className="home__title">
      <h1>
        Bonjour <span className="home__name">{user.firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}

export default HomeTitle
