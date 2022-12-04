import { useState, useEffect } from 'react'

function Expenses({ data }) {
  const [expenses, setExpenses] = useState(null)

  useEffect(() => {
    data.then((res) => {
      setExpenses(res)
    })
  })

  return expenses === null ? null : (
    <section className="expenses">
      <div className="expenses__card expenses__calories">
        <div className="expenses__card-icon"></div>
        <div className="expenses__card-layout">
          <p className="expenses__card-amount">{expenses.calorieCount}kCal</p>
          <p className="expenses__card-unit">Calories</p>
        </div>
      </div>
      <div className="expenses__card expenses__proteines">
        <div className="expenses__card-icon"></div>
        <div className="expenses__card-layout">
          <p className="expenses__card-amount">{expenses.proteinCount}g</p>
          <p className="expenses__card-unit">Proteines</p>
        </div>
      </div>
      <div className="expenses__card expenses__glucides">
        <div className="expenses__card-icon"></div>
        <div className="expenses__card-layout">
          <p className="expenses__card-amount">{expenses.carbohydrateCount}g</p>
          <p className="expenses__card-unit">Glucides</p>
        </div>
      </div>
      <div className="expenses__card expenses__lipides">
        <div className="expenses__card-icon"></div>
        <div className="expenses__card-layout">
          <p className="expenses__card-amount">{expenses.lipidCount}g</p>
          <p className="expenses__card-unit">Lipides</p>
        </div>
      </div>
    </section>
  )
}

export default Expenses
