import React from 'react'
import {Link} from 'react-router-dom'
const SideBar = () => {
  return (
    <div>
      <Link to={"/client/add"} className="btn btn-primary">
      <i class="fas fa-plus"></i> New
      </Link>
    </div>
  )
}

export default SideBar

