import { useState, useEffect } from 'react'

/**
 * The title of the page that welcomes the user with a greeting
 * @param { Promise } data Contain the name of the user
 */
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
