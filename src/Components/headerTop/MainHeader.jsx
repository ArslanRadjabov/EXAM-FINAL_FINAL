import './headermain.scss'
import React from 'react'
import Button from '@mui/material/Button';
import logo from '../img/logo.jpg'
import { BsBagCheck } from 'react-icons/bs';
import { IoReload } from 'react-icons/io5';
import Drewer from './drewer';


function MainHeader() {
  return (
    <div className='container'>
        <div className='header__main d-flex'>
        <div className='header__logo'>
            <img src={logo} alt="logo" />
        </div>
        <div className='searchBar'>
            <input className='input__search' type="text" placeholder='I m shopping for...' />
            <Button className='input__searchBTn' variant="contained">Search</Button>
        </div>

        <div className='Cart'>
            <div><BsBagCheck className='icons__sd'/></div>
            <Drewer/>
            <div><IoReload className='icons__sd'/></div>
        </div>
    </div>
    </div>
  )
}

export default MainHeader