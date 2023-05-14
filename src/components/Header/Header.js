import logo from '../../images/logo192.png'

export default function Header(){
  return (
    <header>
      <nav className="nav">
        <div className="logo">
          <img src={logo} alt="" />
          <h1>ReactFacts</h1>
        </div>
        <span className="nav__current">React Course - Project 1</span>
      </nav>
    </header>
  )
}