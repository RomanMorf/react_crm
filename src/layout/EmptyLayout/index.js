import './style.scss';
import { Outlet } from "react-router-dom";

function EmptyLayout(props) {

  return (
    <div className="empty">
      <Outlet/>
    </div>
  )
}

export default EmptyLayout;