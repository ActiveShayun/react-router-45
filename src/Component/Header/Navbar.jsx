import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
             <h1>header page</h1>
            <nav>
                <ul>
                    <NavLink to='/'>home</NavLink>
                    <NavLink to='/about'>about</NavLink>
                    <NavLink to='/contact'>contact</NavLink>
                    <NavLink to='/users'>users</NavLink>
                    <NavLink to='/posts'>posts</NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;