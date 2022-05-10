import './style.scss';

function MobileMenu({children, onCloseMenu, menuOpen }) {

  return (
    <div className={"burgermenu"} onClick={() => onCloseMenu()}>
      <div className={menuOpen ? "burgermenu_wrapper open" : "burgermenu_wrapper"}>
        <div className={menuOpen ? "burgermenu_body open" : "burgermenu_body"}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default MobileMenu;