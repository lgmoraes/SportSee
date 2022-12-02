function Expenses({ data }) {
  return (
    <section className="expenses">
      <div className="expenses__card expenses__calories">
        <div className="expenses__card-icon"></div>
        <div className="expenses__card-layout">
          <p className="expenses__card-amount">1,930kCal</p>
          <p className="expenses__card-unit">Calories</p>
        </div>
      </div>
      <div className="expenses__card expenses__proteines">
        <div className="expenses__card-icon"></div>
        <div className="expenses__card-layout">
          <p className="expenses__card-amount">155g</p>
          <p className="expenses__card-unit">Proteines</p>
        </div>
      </div>
      <div className="expenses__card expenses__glucides">
        <div className="expenses__card-icon"></div>
        <div className="expenses__card-layout">
          <p className="expenses__card-amount">290g</p>
          <p className="expenses__card-unit">Glucides</p>
        </div>
      </div>
      <div className="expenses__card expenses__lipides">
        <div className="expenses__card-icon"></div>
        <div className="expenses__card-layout">
          <p className="expenses__card-amount">50g</p>
          <p className="expenses__card-unit">Lipides</p>
        </div>
      </div>
    </section>
  )
}

export default Expenses
