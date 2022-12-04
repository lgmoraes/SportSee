const baseUrl = 'http://localhost:3000'
const userId = '18'

const api = {
  getUser: async function () {
    return fetch(`${baseUrl}/user/${userId}`)
      .then((res) => res.json())
      .then((json) => json.data.userInfos)
  },
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
  getScore: async function () {
    return fetch(`${baseUrl}/user/${userId}`)
      .then((res) => res.json())
      .then((json) => json.data.score * 100)
  },
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

function getWeekDay(mday) {
  return ['D', 'L', 'M', 'M', 'J', 'V', 'S'][mday % 7]
}

function getMonthDay(date) {
  return parseInt(date.split('-')[2])
}

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
