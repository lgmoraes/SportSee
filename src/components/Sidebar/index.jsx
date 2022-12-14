/**
 * The bar on the left side of the screen, containing buttons and copyright
 */
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__btns">
        <div className="sidebar__btn sidebar__btnMeditation"></div>
        <div className="sidebar__btn sidebar__btnSwim"></div>
        <div className="sidebar__btn sidebar__btnBike"></div>
        <div className="sidebar__btn sidebar__btnDumbbell"></div>
      </div>
      <div className="sidebar__copyright">Copyright, SportSee 2020</div>
    </div>
  )
}

export default Sidebar
