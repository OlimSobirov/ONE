
import './Destination.scss'
import {Link} from 'react-router-dom'
import image1 from '../../asetss/images/moon.png'





function Destination(){
const destination = [
    {
        

    }
]
    return(
        <main className='destinationbox'>
            <article className='destination'>

                 <div className='destination__image'>
                    <h4>01 Pick your destination</h4>
                    <img src={image1} alt="" />
    
                 </div>
                 <div className='destination__info'>
                    <div className='destination__info__nav'>
                        <ul>
                            <li><Link to="/destination">MOON</Link></li>
                            <li><Link to="/destination/mars">MARS</Link></li>
                            <li><Link to="/destination/europa">EUROPA</Link></li>
                            <li><Link to="/destination/titan">TITAN</Link></li>
                            
                        </ul>
                    </div>
                    <div className='destination__info__name'>
                        <h2>MOON</h2>
                        <p>
                            <span>See our planet as you’ve never seen it before. A perfect   </span>

                        <span>relaxing trip away to help regain perspective and come</span>
                        <span>back refreshed. While you’re there, take in some history</span>
                        by visiting the Luna 2 and Apollo 11 landing sites.
                        </p>
                    </div>
                    <div className='destination__info__info'>
                        <div className='destination__info__info__info1'>
                            <p>AVG. DISTANCE</p>
                            <h4>384,400 km</h4>
                        </div>
                        <div className='destination__info__info__info2'>
                        <p>Est. travel time</p>
                            <h4>3 days</h4>
                        </div>
                        
                
                    </div>
                 </div>
                 <div></div>

            </article>

            
            
        </main>
        
    )
    
}
export default Destination