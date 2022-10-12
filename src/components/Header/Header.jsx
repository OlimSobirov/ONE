import './Header.scss'
import {Link} from 'react-router-dom'
import logo1 from '../../asetss/images/logo.svg'

function Header(){
    return(
        <main>
<div className='logo'>
   <img src={logo1} alt="" />
</div>
<div className='header'>

        <ul className='header__nav'>
            <li><Link to="/">00 Home</Link></li>
            <li><Link to="/destination">00 Destination</Link></li>
            <li><Link to="">00 Crew</Link></li>
            <li><Link to="">00 Technology</Link></li>
           
        </ul>
</div>
        </main>
    )
}
export default Header