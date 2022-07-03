import React from 'react'
import HeaderLogo from '../img/Logo.svg'


export default function Header({ Link }) {
  return (
    <div className='w-100 border border-1 bg-light'>
      <div className='container  d-flex flex-row p-2 align-items-center'>
        <Link to="/" className='d-flex flex-row align-items-center gap-3 text-decoration-none text-dark'>
          <img src={HeaderLogo} alt="Sorry :(" />
          <span>MyApp</span>
        </Link>
        <nav className='d-flex flex-row align-items-center gap-3 ms-auto'>
          <Link to='/git' className='text-decoration-none text-dark mx-2 fw-bold'>GitAPI</Link>
          <Link to='/todo' className='text-decoration-none text-dark mx-2 fw-bold'>Todo</Link>
          <Link to='/auth' className='btn btn-primary mx-auto'>Login</Link>
        </nav>
      </div>
    </div>
  )
}
