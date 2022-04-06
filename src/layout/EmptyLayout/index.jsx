import './style.scss';
import { Outlet } from "react-router-dom";

function EmptyLayout() {

  return (
    <div className="empty">
      <Outlet/>
    </div>
  )
}

export default EmptyLayout;