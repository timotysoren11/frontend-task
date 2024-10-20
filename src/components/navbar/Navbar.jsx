import '../../components/navbar/Navbar.css'
import logoImg from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className="navbar-container">
        <div className="navbar-content">
            <div className="nav-img">
                <img src={logoImg} alt="logo-img" />
            </div>
            <h2>Don&t have a account?</h2>
        </div>
    </div>
  )
}

export default Navbar