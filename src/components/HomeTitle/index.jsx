import PropTypes from 'prop-types'

/**
 * The title of the page that welcomes the user with a greeting
 * @param { Object } user Contain the name of the user
 */
function HomeTitle({ user }) {
  return (
    <div className="home__title">
      <h1>
        Bonjour <span className="home__name">{user.firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}

HomeTitle.propTypes = {
  user: PropTypes.object.isRequired,
}

export default HomeTitle
