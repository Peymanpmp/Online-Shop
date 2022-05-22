import React,{useContext} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../GLobal/CartContetxt'

export default function Navbar() {
  const {qty} = useContext(CartContext)
  return (
    <div className='root'>
        <Link to='/'><p>Home</p></Link>
        <Link to='/cart'><span>{qty}</span></Link>
    </div>
  )
}
