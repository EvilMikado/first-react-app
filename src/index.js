import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

function Header(){
  return(
    <header className='header'>
      <span className='logo'>COMPANY NAME</span>
      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__item'>Home</li>
          <li className='nav__item'>Contact</li>
          <li className='nav__item'>Feedback</li>
        </ul>
      </nav>
    </header>
  )
}

ReactDOM.createRoot(document.querySelector('#root'))
.render(
<Header />
)