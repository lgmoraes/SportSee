const baseUrl = 'http://localhost:3000'
const userId = '18'

/**
 * Allow to send requests to SportSee REST API
 */
const api = {
  /**
   * Returns name and age of the user
   * @return { Promise }
   */
  getUser: async function () {
    return fetch(`${baseUrl}/user/${userId}`)
      .then((res) => res.json())
      .then((json) => json.data.userInfos)
  },
  /**
   * Returns the activity follow-up,
   * contains the evolution of the weight as well as the calories burned
   * @return { Promise }
   */
  getActivity: async function () {
    return fetch(`${baseUrl}/user/${userId}/activity`)
      .then((res) => res.json())
      .then((json) => json.data.sessions)
      .then((sessions) =>
        sessions.map((session) => {
          const d = session.day
          session.day = getWeekDay(getMonthDay(d))
          return session
        })
      )
  },
  /**
   * Returns uptime tracking (duration of sessions)
   * @return { Promise }
   */
  getAverageSessions: async function () {
    return fetch(`${baseUrl}/user/${userId}/average-sessions`)
      .then((res) => res.json())
      .then((json) => json.data.sessions)
      .then((sessions) =>
        sessions.map((session) => {
          const d = session.day
          session.day = getWeekDay(d)
          return session
        })
      )
  },
  /**
   * Returns performance indices (cardio, energy, endurance,
   * strength, speed, intensity)
   * @return { Promise }
   */
  getPerformance: async function () {
    return fetch(`${baseUrl}/user/${userId}/performance`)
      .then((res) => res.json())
      .then((json) =>
        json.data.data
          .map((perf) => ({
            value: perf.value,
            kind: json.data.kind[perf.kind],
          }))
          .map((perf) => {
            let k = perf.kind

            if (k === 'cardio') perf.kind = 'Cardio'
            else if (k === 'energy') perf.kind = 'Energie'
            else if (k === 'endurance') perf.kind = 'Endurance'
            else if (k === 'strength') perf.kind = 'Force'
            else if (k === 'speed') perf.kind = 'Vitesse'
            else if (k === 'intensity') perf.kind = 'Intensité'

            return perf
          })
          .reverse()
      )
  },
  /**
   * Returns the goal completion percentage
   * @return { Promise }
   */
  getScore: async function () {
    return fetch(`${baseUrl}/user/${userId}`)
      .then((res) => res.json())
      .then((json) => json.data.score * 100)
  },
  /**
   * Returns the caloric expenditure of
   * the user (calories, protein, carbohydrate, lipids)
   * @return { Promise }
   */
  getExpenses: async function () {
    return fetch(`${baseUrl}/user/${userId}`)
      .then((res) => res.json())
      .then((json) => json.data.keyData)
      .then((keyData) => {
        for (const data in keyData) {
          keyData[data] = formatNumber(keyData[data])
        }

        return keyData
      })
  },
}

/**
 * Return the week day letter from a numeric day of month
 * @param { String } mday Numeric day of the month (start from 1)
 * @return { Promise }
 */
function getWeekDay(mday) {
  return ['D', 'L', 'M', 'M', 'J', 'V', 'S'][mday % 7]
}

/**
 * Return day of month from an english date
 * @param { String } date English date (YYYY-MM-DD)
 * @return { String } Numeric day of month
 */
function getMonthDay(date) {
  return parseInt(date.split('-')[2])
}

/**
 * Formats numbers by adding commas
 * @param { Number } n Number to format
 * @return { String } Formated number
 */
function formatNumber(n) {
  let str = n.toString()

  return str.lenght < 4
    ? str
    : Array.from(str)
        .reverse()
        .reduce((acc, c, i) => {
          if (i % 3 === 0 && i > 0) acc.push(',')
          acc.push(c)
          return acc
        }, [])
        .reverse()
}

export default api
