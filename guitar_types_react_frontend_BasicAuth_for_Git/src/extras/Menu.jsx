import {NavLink, useNavigate} from 'react-router-dom'
import {isCurrentUserAuthenticated, logoutCleaner} from "../services/RegistrierungsService.jsx";



const Menu = () => {
    const navigate = useNavigate();

    const isUserValid = isCurrentUserAuthenticated();

    function logout() {
        logoutCleaner();
        navigate("/login");
    }

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-text bg-gradient">
                <div className="collapse navbar-collapse bg-gradient" id="nav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {
                                !isUserValid &&
                                <NavLink className='nav-link' to='/login'>Login</NavLink>
                            }
                        </li>
                        <li className="nav-item">
                            {
                                isUserValid &&
                                <NavLink className='nav-link' to='/anmeldung'>Registrierung</NavLink>
                            }
                        </li>
                        <li className="nav-item">
                            {
                                isUserValid &&
                                <NavLink className='nav-link' to='/guitar-types'>Guitar Types</NavLink>
                            }
                        </li>
                        <li className="nav-item">
                            {
                                isUserValid &&
                                <NavLink className='nav-link' onClick={logout} to='/logout'>Logout</NavLink>
                            }

                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Menu