import React from 'react'
import { Link } from 'react-router-dom'
import './topCATEG.scss'
function TopCateg() {
  return (
    <div className='categ__titles'>
        <h1>HELLOWORLD SHIT TOPCATEG</h1>
        <ul className='categ__ul d-flex gap-5'   style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}>
            <Link  to='/description'>Description</Link>
            <Link  to='/review'>Review(1)</Link>
            <Link  to='/custom'>Custom</Link>
        </ul>
    </div>
  )
}

export default TopCateg