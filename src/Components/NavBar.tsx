// 4- Create Navbar and add to index.tsx
import { Link, useNavigate,NavLink } from "react-router-dom";

export function NavBar()
{
    let ActiveLink = 'activeLink';
    return (
    <>
    <ul className="navbar">
        <li><NavLink to='/create' className = {({isActive}) => isActive? ActiveLink: 'tab'}>Add New Hotel</NavLink></li>
        <li><NavLink to='/' className = {({isActive}) => isActive? ActiveLink: 'tab' }>Home</NavLink></li>
    </ul>
     </>);
}
